import React, { useEffect } from 'react'
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import ElementCard from '../../components/ElementCard/ElementCard';
import Loader from '../../components/Loader/Loader';
import ModalAdd from '../../components/ModalAdd/ModalAdd';

export default function MainWindow() {

    const [stateElements, setstateElements] = useState([]);
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
              <ElementCard
                key={index}
                elementToShow={{name: 'Carlos Suárez', email: 'carlosuarez27@outlook.com'}}
              />
            ))
            }
            {stateElements.length > 0 &&
              <div>

              </div>
            }
          </div>
          <Loader state={stateLoader}/>
          <ModalAdd
            state={stateModalAdd}
            title={'Agregar elemento'}
            butonText={'Agregar'}
            buttonFunction={() => {console.log('add')}}
            closeFunction={() => {setstateModalAdd(!stateModalAdd)}}
          />
        </div>
    )
}
