import React from 'react'
import ContentBanner from './ContentBanner'
import ImageBanner from './ImageBanner'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div>
                <ContentBanner />
            </div>
            <div className=''>
                <ImageBanner />
            </div>
        </div>
    )
}

export default Banner