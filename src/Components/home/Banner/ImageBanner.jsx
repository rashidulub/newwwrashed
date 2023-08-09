import React from 'react';
import Image from 'next/image'
import bannerImage from '../../../asstes/banner.jpg'

const ImageBanner = () => {
    return (
        <div className='pr-14'>
            <Image className='rounded-br-[60px]'
                src={bannerImage}
                width={600}
                height={600}
                alt="Picture of the author"
            />
        </div>
    )
}

export default ImageBanner