import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import ModalMessage from '../../components/ModalMessage/ModalMessage';
import PlacesCardForUsers from '../../components/PlacesCardForUsers/PlacesCardForUsers';
import { getAllPlaces } from '../../services/PlaceService';

export default function UserAccountPage() {

    const [statePlaces, setstatePlaces] = useState([]);
    const [stateLoader, setstateLoader] = useState(false);
    const [stateErrorGet, setstateErrorGet] = useState(false);

    useEffect(() => {
        updatePlaces()
    }, []);

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
            <div className='flex-col padding-2 gap-y-2'>
                {statePlaces.length > 0 && statePlaces.map((place, index) => (
                    <PlacesCardForUsers
                      key={index}
                      elementToShow={place}
                    />
                ))}
                {statePlaces.length === 0 &&
                    <p className='red-text'>No hay sitios</p>
                }
            </div>
            <Loader state={stateLoader}/>
            <ModalMessage
                state={stateErrorGet}
                messageType={'error'}
                text={'Error al obtener sitios'}
                closeFunction={() => {setstateErrorGet(!stateErrorGet)}}
            />
        </div>
    )
}
