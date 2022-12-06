import React from 'react';
import { UserCircleIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

export default function MainWindow() {

  const navigate = useNavigate()

    return (
        <div className='padding-2'>
          <div className='flex-row gap-x-2'>
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
          </div>
        </div>
    )
}
