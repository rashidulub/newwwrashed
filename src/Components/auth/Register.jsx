'use client'
import { useState } from 'react';
import Lottie from 'lottie-react';
import { FaCamera, FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
import eating from '../../assets/LottieAnimation/education.json'
import SocialLogin from './SocialLogin';
import Link from 'next/link';
import { useRouter } from "next/navigation";
// import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = ({ callbackUrl }) => {
    const router = useRouter();
    const [load, setLoad] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const createUserHandle = async (data) => {
        // setLoad(true)
        const name = data.name
        const email = data.email
        const password = data.password
        const image = data.image[0]
        const newUser = { name, email, password }
        const formData = new FormData()
        formData.append('image', image)
        try {
            const res = await axios.post("http://localhost:3000/api/register", { newUser });
            console.log("Response:", res);
            const data = res.data;
            console.log(data);
            // const res = await fetch("http://localhost:3000/api/topics", {
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            //     body: JSON.stringify({ title, description }),
            // });
            // if (!data.user) return null;
            // await signIn('credentials', {
            //   username: data.user.username,
            //   password: form.get('password'),
            //   callbackUrl: '/',
            // });
        } catch (error) {
            console.log("Error during registration: ", error);
        }

    }
    return (
        <div className="relative ">
            <img
                src="https://i.ibb.co/LpjxG3k/494.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 lg:w-7/12">
                            {<Lottie animationData={eating} loop={true}></Lottie>}
                        </div>
                        <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
                            <div className="bg-[#0083db] rounded shadow-2xl p-7 sm:p-10 ">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                                    Register
                                </h3>
                                <form onSubmit={handleSubmit(createUserHandle)}>
                                    <div className="mb-1 sm:mb-2">
                                        <div className='relative  mb-3'>
                                            <FaUser className='absolute left-4 top-[30%] text-black '></FaUser>
                                            <input
                                                {...register("name", { required: "Name is required!" })}
                                                placeholder="Your Name Here"
                                                type="text"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                            />
                                            {errors?.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                        </div>
                                        <div className='relative  mb-3'>
                                            <FaMailBulk className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                                            <input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: { value: /\S+@\S+\.\S+/, message: 'Email is not valid!' }
                                                })}
                                                placeholder="Type Your Email"
                                                type="text"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                            />
                                            {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                                        </div>
                                        <div className='relative mb-3'>
                                            <FaCamera className='absolute left-4 top-[30%] text-black '></FaCamera>
                                            <input
                                                {...register("image", { required: "image is required!" })}
                                                placeholder="Upload Image"
                                                type="file"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                            />
                                            {errors?.image && <p className='text-red-600'>{errors?.image.message}</p>}
                                        </div>
                                        <div className='relative mb-3'>
                                            <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                                            <input
                                                {...register("password", {
                                                    required: "Password is required!",
                                                    pattern: { value: /(?=.*[!@#$&*])/, message: 'password should be minimum one special character' },
                                                    minLength: { value: 6, message: 'password should be must 6 characters' }
                                                })}
                                                placeholder="password"
                                                type="password"
                                                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                                            />
                                            {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                                        >
                                            {
                                                load ? <span className='border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full'></span> : ' Register'
                                            }
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <SocialLogin callbackUrl={callbackUrl}></SocialLogin>
                                    <p className="text-xs text-gray-600 sm:text-sm mt-5">
                                        Already have an account ? <Link href='/login' className='font-semibold'> Login</Link>
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

export default Register