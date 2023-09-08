'use client'
import { signOut } from 'next-auth/react';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const DeleteUser = (props) => {
    const useremail = props.id;
    console.log(useremail);
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const deleteUser = async () => {
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
                module.exports = {
                    async redirects() {
                        return [
                            {
                                source: '/settings',
                                destination: '/',
                                permanent: true,
                            },
                        ]
                    },
                }
                signOut();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then(async (result) => {
        //     if (result.isConfirmed) {
        //         let response = await fetch(`http://localhost:3000/api/user/${useremail}`, {
        //             method: 'DELETE'
        //         });
        //         response = await response.json();
        //         if (response.success) {
        //             Swal.fire(
        //                 'Deleted!',
        //                 'Your file has been deleted.',
        //                 'success'
        //             )
        //         }
        //     }
        // })
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setDisabled(value !== 'Delete');
    };
    return (
        <div className='grid grid-cols-3'>
            <h6>Delete this account</h6>
            <div className='flex justify-end'>
                <input value={inputValue} onChange={handleInputChange} className='bg-[#e9e9e9] border border-[#b5b5b5] rounded w-1/2 px-2' placeholder='please type "Delete"' type="text" />
            </div>
            <div className='text-end'>
                <button disabled={disabled} onClick={deleteUser} className={`px-2 rounded ${disabled ? 'bg-red-200 text-[#a4a4a4]' : 'bg-red-500 text-white'}`}>Yes</button>
            </div>
        </div>
    );
};

export default DeleteUser;