import React, { useState } from 'react'
import closeIcon from "../../Assets/close.svg"
import ModalMessage from '../ModalMessage/ModalMessage';

export default function ModalAddPlace({state, title, butonText, buttonFunction, closeFunction}) {

    const [stateName, setstateName] = useState('');
    const [stateDescription, setstateDescription] = useState('');
    const [stateLocation, setstateLocation] = useState('');
    const [stateWarningData, setstateWarningData] = useState(false);

    const cleanFields = () => {
        setstateName('')
        setstateDescription('')
        setstateLocation('')
    }

    const addPlace = () => {
        if (stateName === '' || stateDescription === '' || stateLocation === '') {
            setstateWarningData(!stateWarningData)
        } else {
            const newPlace = {
                name: stateName,
                description: stateDescription,
                location: stateLocation
            }
            buttonFunction(newPlace)
            cleanFields()
        }
    }

    return (
        <> 
            {state &&
                <div className='overlay-modals'>
                    <div className='modal-container'>
                        <input type="image" src={closeIcon} width={20} onClick={() => {closeFunction()}} className="button-close-modal " alt='img-modal'/>
                        <p className='title'>{title}</p>
                        <div className='flex-col gap-y-1 overflow-auto modal-scroll'>
                            <div className='flex-col'>
                                <p>Nombre</p>
                                <input
                                    className='input-text'
                                    type={'text'}
                                    value={stateName}
                                    onChange={(e) => {setstateName(e.target.value)}}
                                />
                            </div>
                            <div className='flex-col'>
                                <p>DescripciĆ³n</p>
                                <textarea
                                    className='input-text'
                                    value={stateDescription}
                                    onChange={(e) => {setstateDescription(e.target.value)}}
                                />
                            </div>
                            <div className='flex-col'>
                                <p>UbicaciĆ³n</p>
                                <input
                                    className='input-text'
                                    type={'text'}
                                    value={stateLocation}
                                    onChange={(e) => {setstateLocation(e.target.value)}}
                                />
                            </div>
                        </div>
                        <button
                            className='default-button button-hover-blue'
                            onClick={() => {addPlace()}}
                        >
                            {butonText}
                        </button>
                    </div>
                </div>
            }
            <ModalMessage
                state={stateWarningData}
                messageType={'warning'}
                text={'Hacen falta datos'}
                closeFunction={() => {setstateWarningData(!stateWarningData)}}
            />
        </>
    )
}
