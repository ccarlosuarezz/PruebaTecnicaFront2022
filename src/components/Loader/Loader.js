import React from 'react'
import './Loader.css'

export default function Loader({state}) {
    return (
        <>
            {state &&
                <div className='overlay-loader'>
                    <div className="lds-dual-ring"/>
                </div>
            }
        </>
    )
}
