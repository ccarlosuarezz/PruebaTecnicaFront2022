import React from 'react'
import closeIcon from "../../Assets/close.svg"

export default function ModalAdd({state, title, butonText, buttonFunction, closeFunction}) {
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
                                />
                            </div>
                            <div className='flex-col'>
                                <p>Email</p>
                                <input
                                    className='input-text'
                                    type={'text'}
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
