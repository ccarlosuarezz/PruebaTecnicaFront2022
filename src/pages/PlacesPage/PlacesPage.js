import React from 'react'
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Loader from '../../components/Loader/Loader';
import ModalAddPlace from '../../components/ModalAddPlace/ModalAddPlace';
import PlaceCard from '../../components/PlaceCard/PlaceCard';

export default function PlacesPage() {

    const [statePlaces, setstatePlaces] = useState([]);
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
              <PlaceCard
                key={index}
                elementToShow={{name: 'Unicentro', description: 'Centro comercial', location: 'Av Universitaria #39 - 77'}}
              />
            ))
            }
            {statePlaces.length === 0 &&
              <p className='red-text'>No hay sitios</p>
            }
          </div>
          <Loader state={stateLoader}/>
          <ModalAddPlace
            state={stateModalAdd}
            title={'Agregar sitio'}
            butonText={'Agregar'}
            buttonFunction={() => {console.log('add')}}
            closeFunction={() => {setstateModalAdd(!stateModalAdd)}}
          />
        </div>
    )
}