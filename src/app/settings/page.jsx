import React from 'react';
import DeleteUser from './DeleteUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

// async function getUsers() {
//     let data = await fetch('http://localhost:3000/api/user');
//     data = await data.json();
//     return data;
// }

const Settings = async ({ params }) => {
    // const users = await getUsers();
    // console.log(users);
    const session = await getServerSession(authOptions)
    // console.log(session.user.email);
    return (
        <div className='pt-32 lg:w-3/4 w-11/12 mx-auto px-7 py-10'>
            {/* <h3 className='font-semibold text-3xl text-[#0083db] pb-10'>Setting and Privacy</h3> */}
            <h5 className='font-semibold text-2xl'>Profile Setting</h5>
            <div className='grid grid-cols-2 mt-2 mb-10'>
                <div className='col-span-2 border'>
                    <div className='grid grid-cols-3 border-b p-3'>
                        <h6>Showcase your achievements</h6>
                        <p className='text-end'>Yes</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 p-3'>
                        <h6>Change password</h6>
                        <p className='text-end'>********2e</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='font-semibold text-2xl'>Privacy Setting</h5>
            <div className='grid grid-cols-2 mt-2 mb-10'>
                <div className='col-span-2 border'>
                    <div className='grid grid-cols-3 border-b p-3'>
                        <h6>Who can visit your profile</h6>
                        <p className='text-end'>Everyone</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 border-b p-3'>
                        <h6>Who can add you in a class</h6>
                        <p className='text-end'>Only me</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 p-3'>
                        <h6>Who can follow your activity</h6>
                        <p className='text-end'>Everyone</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='font-semibold text-2xl'>Notification Setting</h5>
            <div className='grid grid-cols-2 mt-2 mb-10'>
                <div className='col-span-2 border'>
                    <div className='grid grid-cols-3 border-b p-3'>
                        <h6>How do you want to get notified</h6>
                        <p className='text-end'>Via email</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 p-3'>
                        <h6>Which classes do you want to get notified from</h6>
                        <p className='text-end'>All classes</p>
                        <div className='text-end'>
                            <button className='bg-[#0083db] text-white px-2 rounded'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='font-semibold text-2xl'>Danger Zone</h5>
            <div className='grid grid-cols-2 border border-red-500 mt-2 mb-10 p-3'>
                <div className='col-span-2'>
                    <DeleteUser />
                    {/* <DeleteUser id={session.user.email} /> */}
                </div>
            </div>
        </div>
    );
};

export default Settings;