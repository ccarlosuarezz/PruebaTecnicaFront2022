import React from 'react'
import { UserCircleIcon, EnvelopeIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import './ElementCard.css'

export default function ElementCard({elementToShow}) {
    return (
        <div className='flex-row card-element gap-x-2 padding-1'>
            <div className='flex-row gap-x-1'>
                <UserCircleIcon width={30} className='icon-blue'/>
                <p>{elementToShow.name}</p>
            </div>
            <div className='flex-row gap-x-1'>
                <EnvelopeIcon width={30} className='icon-blue'/>
                <p>{elementToShow.email}</p>
            </div>
            <div className='flex-row gap-x-2'>
                <button className='flex-col button-card bg-green'>
                    <EyeIcon width={30} className='icon'/>
                </button>
                <button className='flex-col button-card bg-yellow'>
                    <PencilSquareIcon width={30} className='icon'/>
                </button>
                <button className='flex-col button-card bg-red'>
                    <TrashIcon width={30} className='icon'/>
                </button>
            </div>
        </div>
    )
}
