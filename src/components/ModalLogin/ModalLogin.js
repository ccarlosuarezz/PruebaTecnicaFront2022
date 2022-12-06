import React, { useState } from 'react'
import closeIcon from "../../Assets/close.svg"

export default function ModalLogin({state, buttonFunction, closeFunction}) {

    const [stateNickname, setstateNickname] = useState('');

    return (
        <> 
            {state &&
                <div className='overlay-modals'>
                    <div className='modal-container'>
                    <input type="image" src={closeIcon} width={20} onClick={() => {closeFunction()}} className="button-close-modal " alt='img-modal'/>
                        <p className='title'>Iniciar sesión</p>
                        <div className='flex-col'>
                            <p>Nickname</p>
                            <input
                                className='input-text'
                                type={'text'}
                                value={stateNickname}
                                onChange={(e) => {setstateNickname(e.target.value)}}
                            />
                        </div>
                        <button
                            className='default-button button-hover-blue'
                            onClick={() => {buttonFunction(stateNickname)}}
                        >
                            Ingresar
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
