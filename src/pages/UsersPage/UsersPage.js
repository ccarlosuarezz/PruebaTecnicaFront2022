import React, { useEffect } from 'react'
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import UserCard from '../../components/UserCard/UserCard';
import Loader from '../../components/Loader/Loader';
import ModalAddUser from '../../components/ModalAddUser/ModalAddUser';
import { createUser, getAllUsers } from '../../services/UserService';
import ModalMessage from '../../components/ModalMessage/ModalMessage';

export default function UsersPage() {

    const [stateUsers, setstateUsers] = useState([]);
    const [stateModalAdd, setstateModalAdd] = useState(false);
    const [stateLoader, setstateLoader] = useState(false);
    const [stateErrorAdd, setstateErrorAdd] = useState(false);
    const [stateErrorGet, setstateErrorGet] = useState(false);

    useEffect(() => {
      updateUsers()
    }, []);

    const addUser = (newUser) => {
      setstateLoader(true)
      createUser(newUser)
      .then(res => {
        console.log(res)
        setstateModalAdd(!stateModalAdd)
        updateUsers()
        setstateLoader(false)
      })
      .catch(err => {
        setstateLoader(false)
        console.log(err)
        setstateErrorAdd(!stateErrorAdd)
      })
    }

    const updateUsers = () => {
      setstateLoader(true)
      getAllUsers()
      .then(res => {
        setstateLoader(false)
        console.log(res)
        if (res.data.ok) {
          setstateUsers(res.data.data)
        }
      })
      .catch(err => {
        setstateLoader(false)
        console.log(err)
        setstateErrorGet(!stateErrorGet)
      })
    }

    return (
        <div className='padding-2'>
          <div className='flex-col'>
            <button
              className='flex-row gap-x-1 button bg-blue button-hover-blue'
              onClick={() => {setstateModalAdd(!stateModalAdd)}}
            >
              <PlusCircleIcon width={30} className='icon'/>
              <p>Nuevo</p>
            </button>
          </div>
          <div className='flex-col padding-2 gap-y-2'>
            {stateUsers.length > 0 && stateUsers.map((user, index) => (
              <UserCard
                key={index}
                elementToShow={user}
              />
            ))
            }
            {stateUsers.length === 0 &&
              <p className='red-text'>No hay usuarios</p>
            }
          </div>
          <Loader state={stateLoader}/>
          <ModalAddUser
            state={stateModalAdd}
            title={'Agregar usuario'}
            butonText={'Agregar'}
            buttonFunction={(newUser) => {addUser(newUser)}}
            closeFunction={() => {setstateModalAdd(!stateModalAdd)}}
          />
          <ModalMessage
            state={stateErrorAdd}
            messageType={'error'}
            text={'Error al agregar usuario'}
            closeFunction={() => {setstateErrorAdd(!stateErrorAdd)}}
          />
          <ModalMessage
            state={stateErrorGet}
            messageType={'error'}
            text={'Error al obtener usuarios'}
            closeFunction={() => {setstateErrorGet(!stateErrorGet)}}
          />
        </div>
    )
}