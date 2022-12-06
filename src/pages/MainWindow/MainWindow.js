import React, { useState } from 'react';
import { UserCircleIcon, MapPinIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import ModalLogin from '../../components/ModalLogin/ModalLogin';

export default function MainWindow() {

  const navigate = useNavigate()

  const [stateModalLogin, setstateModalLogin] = useState(false);

  const loginFunction = (nickname) => {
    //validar inicio de sesión
    navigate('/user-account')
  }

    return (
        <div className='padding-2'>
          <div className='flex-col gap-y-2'>
            <button
              className='flex-row gap-x-1 button bg-blue button-hover-blue'
              onClick={() => {navigate("/users")}}
            >
              <UserCircleIcon width={30} className='icon'/>
              <p>Usuarios</p>
            </button>
            <button
              className='flex-row gap-x-1 button bg-blue button-hover-blue'
              onClick={() => {navigate("/places")}}
            >
              <MapPinIcon width={30} className='icon'/>
              <p>Sitios de interés</p>
            </button>
            <button
              className='flex-row gap-x-1 button bg-blue button-hover-blue'
              onClick={() => {setstateModalLogin(!stateModalLogin)}}
            >
              <ArrowRightOnRectangleIcon width={30} className='icon'/>
              <p>Iniciar sesión</p>
            </button>
          </div>
          <ModalLogin
            state={stateModalLogin}
            buttonFunction={(nickname) => {loginFunction(nickname)}}
            closeFunction={() => {setstateModalLogin(!stateModalLogin)}}
          />
        </div>
    )
}
