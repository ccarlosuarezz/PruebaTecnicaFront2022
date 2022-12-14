import React, { useState } from 'react'
import closeIcon from "../../Assets/close.svg"
import ModalMessage from '../ModalMessage/ModalMessage';

export default function ModalAddUser({state, title, butonText, buttonFunction, closeFunction}) {

    const [stateName, setstateName] = useState('');
    const [stateNickname, setstateNickname] = useState('');
    const [stateEmail, setstateEmail] = useState('');
    const [stateWarningData, setstateWarningData] = useState(false);

    const cleanFields = () => {
        setstateName('')
        setstateNickname('')
        setstateEmail('')
    }

    const addUser = () => {
        if (stateName === '' || stateNickname === '' || stateEmail === '') {
            setstateWarningData(!stateWarningData)
        } else {
            const newUser = {
                name: stateName,
                nickname: stateNickname,
                email: stateEmail
            }
            buttonFunction(newUser)
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
                                <p>Nickname</p>
                                <input
                                    className='input-text'
                                    type={'text'}
                                    value={stateNickname}
                                    onChange={(e) => {setstateNickname(e.target.value)}}
                                />
                            </div>
                            <div className='flex-col'>
                                <p>Email</p>
                                <input
                                    className='input-text'
                                    type={'text'}
                                    value={stateEmail}
                                    onChange={(e) => {setstateEmail(e.target.value)}}
                                />
                            </div>
                        </div>
                        <button
                            className='default-button button-hover-blue'
                            onClick={() => {addUser()}}
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
