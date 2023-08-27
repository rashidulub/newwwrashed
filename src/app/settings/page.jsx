import React from 'react';

const Settings = () => {
    return (
        <div className='pt-32 w-3/4 mx-auto px-7'>
            <h3 className='font-semibold text-3xl text-[#0083db] pb-10'>Setting and Privacy</h3>
            <div className='grid grid-cols-3 border-b mb-4 pb-2'>
                <h5>Profile Setting</h5>
                <div className='col-span-1'>
                    <h6>Who can see your profile</h6>
                </div>
                <div className='text-end'>
                    <button>Edit</button>
                </div>
            </div>
            <div className='grid grid-cols-3 border-b mb-4 pb-2'>
                <h5>Password Setting</h5>
                <div className='col-span-1'>
                    <h6>Change Password</h6>
                </div>
                <div className='text-end'>
                    <button>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;