import React from 'react'
import { BookmarkIcon, Bars3BottomLeftIcon, MapPinIcon, StarIcon as StarLine } from '@heroicons/react/24/outline'
import { StarIcon as StarFill } from '@heroicons/react/24/solid'

export default function PlacesCardForUsers({elementToShow}) {
    return (
        <div className='flex-col card-element gap-y-1 padding-1'>
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
            <div className='flex-row'>
                {Array.from({length: 3}).map((el, index) => (
                    <StarFill key={index} width={30} className='icon-blue'/>
                ))}
                {Array.from({length: 2}).map((el, index) => (
                    <StarLine key={index} width={30} className='icon-blue'/>
                ))}
            </div>
            <button
                className='default-button button-hover-blue'
                onClick={() => {}}
            >
                Calificar
            </button>
        </div>
    )
}
