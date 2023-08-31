"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Settings = () => {
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const buttonDisable = () => {
        if (inputValue === 'Delete') {
            setDisabled(false);
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setDisabled(value !== 'Delete');
    };
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
                    <div className='grid grid-cols-3'>
                        <h6>Delete this account</h6>
                        <div className='flex justify-end'>
                            <input value={inputValue} onChange={handleInputChange} className='bg-[#e9e9e9] border border-[#b5b5b5] rounded w-1/2 px-2' placeholder='please type "Delete"' type="text" />
                        </div>
                        <div className='text-end'>
                            <button disabled={disabled} onClick={buttonDisable} className={`px-2 rounded ${disabled ? 'bg-red-200 text-[#a4a4a4]' : 'bg-red-500 text-white'}`}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;