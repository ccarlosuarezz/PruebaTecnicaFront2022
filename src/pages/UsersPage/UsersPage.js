import React from 'react'
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import UserCard from '../../components/UserCard/UserCard';
import Loader from '../../components/Loader/Loader';
import ModalAddUser from '../../components/ModalAddUser/ModalAddUser';

export default function UsersPage() {

    const [stateUsers, setstateUsers] = useState([]);
    const [stateModalAdd, setstateModalAdd] = useState(false);
    const [stateLoader, setstateLoader] = useState(false);

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
            {Array.from({length: 4}).map((el, index) => (
              <UserCard
                key={index}
                elementToShow={{nickname: 'carlosuarez', name: 'Carlos Suárez', email: 'carlosuarez27@outlook.com'}}
              />
            ))
            }
            {stateUsers.length > 0 &&
              <div>

              </div>
            }
          </div>
          <Loader state={stateLoader}/>
          <ModalAddUser
            state={stateModalAdd}
            title={'Agregar usuario'}
            butonText={'Agregar'}
            buttonFunction={() => {console.log('add')}}
            closeFunction={() => {setstateModalAdd(!stateModalAdd)}}
          />
        </div>
    )
}