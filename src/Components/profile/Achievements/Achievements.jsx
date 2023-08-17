import React from 'react';
import { BsTrophy } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";

const Achievements = () => {
    return (
        <div>
            <h4 className='font-semibold text-[#0083db] text-2xl mt-4'>Achievements</h4>
            <div className='grid grid-cols-1'>
                <div className='flex items-center gap-3 mt-2'>
                    <MdOutlineAssignment className='text-4xl' />
                    <div>
                        <p className='font-semibold text-lg'>Submitted 16 Assignments</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                    <BsTrophy className='text-4xl' />
                    <div>
                        <p className='font-semibold text-lg'>Selected best student 4 times</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;