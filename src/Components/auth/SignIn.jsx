'use client'
import Link from 'next/link'
import { useState } from 'react';
import { FaKey, FaMailBulk } from 'react-icons/fa';
import Lottie from 'lottie-react';
import eating from '../../assets/LottieAnimation/education.json'
import SocialLogin from './SocialLogin';

const SignIn = ({ callbackUrl }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const { email, password } = formData

    // get input value
    const handleInputData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [name]: value })
    }

    //user sign in 
    const userSignInHandle = (e) => {
        console.log('hello')
    }

    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/KVX8GhJ/3659672.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 ">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col-reverse items-center justify-between lg:flex-row ">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            {<Lottie animationData={eating} loop={true}></Lottie>}
                        </div>
                        <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
                            <div className="bg-[#0083db] rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                                    Login
                                </h3>
                                <form onSubmit={userSignInHandle}>
                                    <div className="mb-1 sm:mb-2">
                                        <div className='relative  mb-3'>
                                            <FaMailBulk className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                                            <input
                                                onBlur={handleInputData}
                                                placeholder="email"
                                                required
                                                type="email"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className='relative mb-3'>
                                            <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                                            <input
                                                onBlur={handleInputData}
                                                placeholder="password"
                                                required
                                                type="password"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                                id="password"
                                                name="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full py-3 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black hover:bg-gray-700 "
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <SocialLogin callbackUrl={callbackUrl}></SocialLogin>
                                    <p className="text-xs text-gray-600 sm:text-sm mt-5 cursor-pointer">
                                        Create an account? <Link href='/signUp' className='font-semibold'> Register Now</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn