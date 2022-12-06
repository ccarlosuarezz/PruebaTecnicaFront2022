import React, { useEffect } from 'react'
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Loader from '../../components/Loader/Loader';
import ModalAddPlace from '../../components/ModalAddPlace/ModalAddPlace';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import { createPlace, getAllPlaces } from '../../services/PlaceService';
import ModalMessage from '../../components/ModalMessage/ModalMessage';

export default function PlacesPage() {

    const [statePlaces, setstatePlaces] = useState([]);
    const [stateModalAdd, setstateModalAdd] = useState(false);
    const [stateLoader, setstateLoader] = useState(false);
    const [stateErrorAdd, setstateErrorAdd] = useState(false);
    const [stateErrorGet, setstateErrorGet] = useState(false);

    useEffect(() => {
      updatePlaces()
    }, []);

    const addPlace = (newPlace) => {
      setstateLoader(true)
      createPlace(newPlace)
      .then(res => {
        console.log(res)
        setstateModalAdd(!stateModalAdd)
        updatePlaces()
        setstateLoader(false)
      })
      .catch(err => {
        setstateLoader(false)
        console.log(err)
        setstateErrorAdd(!stateErrorAdd)
      })
    }

    const updatePlaces = () => {
      setstateLoader(true)
      getAllPlaces()
      .then(res => {
        setstateLoader(false)
        console.log(res)
        if (res.data.ok) {
          setstatePlaces(res.data.data)
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
            {statePlaces.length > 0 && statePlaces.map((place, index) => (
              <PlaceCard
                key={index}
                elementToShow={place}
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
            buttonFunction={(newPlace) => {addPlace(newPlace)}}
            closeFunction={() => {setstateModalAdd(!stateModalAdd)}}
          />
          <ModalMessage
            state={stateErrorAdd}
            messageType={'error'}
            text={'Error al agregar sitio'}
            closeFunction={() => {setstateErrorAdd(!stateErrorAdd)}}
          />
          <ModalMessage
            state={stateErrorGet}
            messageType={'error'}
            text={'Error al obtener sitios'}
            closeFunction={() => {setstateErrorGet(!stateErrorGet)}}
          />
        </div>
    )
}