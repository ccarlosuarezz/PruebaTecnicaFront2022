import React, { useState } from 'react'
import closeIcon from "../../Assets/close.svg"

export default function ModalAddUser({state, title, butonText, buttonFunction, closeFunction}) {

    const [stateName, setstateName] = useState('');
    const [stateNickname, setstateNickname] = useState('');
    const [stateEmail, setstateEmail] = useState('');

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
                            onClick={() => {buttonFunction()}}
                        >
                            {butonText}
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
