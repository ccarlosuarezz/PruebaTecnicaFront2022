import React from 'react'
import { BookmarkIcon, Bars3BottomLeftIcon, MapPinIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import './PlaceCard.css'

export default function PlaceCard({elementToShow}) {
    return (
        <div className='flex-row card-element gap-x-2 padding-1'>
            <div className='flex-row gap-x-1'>
                <BookmarkIcon width={30} className='icon-blue'/>
                <p>{elementToShow.name}</p>
            </div>
            <div className='flex-row gap-x-1'>
                <Bars3BottomLeftIcon width={30} className='icon-blue'/>
                <p>{elementToShow.description}</p>
            </div>
            <div className='flex-row gap-x-1'>
                <MapPinIcon width={30} className='icon-blue'/>
                <p>{elementToShow.location}</p>
            </div>
            <div className='flex-row gap-x-2'>
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
