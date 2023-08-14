import React from 'react'

const SocialLogin = () => {
    const signWithGoogleHandle = () => {
        console.log('google')
    }
    return (
        <div className='relative '>
            <div className='absolute left-4 top-[20%] text-black' >
                <img src={googleImg} alt="" className='w-[30px]' />
            </div>
            <button
                onClick={signWithGoogleHandle}
                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
            >SignIn With Google</button>
        </div>
    )
}

export default SocialLogin