import React from 'react'
import { ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

export default function ModalMessage({state, messageType, text, closeFunction}) {
    return (
        <>
            {state && 
                <div className='overlay-modals'>
                    <div className='modal-container'>
                        {messageType === "warning" && <ExclamationTriangleIcon width={40} className='text-yellow'/>}
                        {messageType === "success" && <CheckCircleIcon width={40} className='text-green'/>}
                        {messageType === "error" && <XCircleIcon width={40} className='text-red'/>}
                        <p className='text-center'>{text}</p>
                        <button
                            className='default-button'
                            onClick={() => {closeFunction()}}
                        >Aceptar</button>
                    </div>
                </div>
            }
        </>
    )
}
