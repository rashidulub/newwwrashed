'use client'
import CoursesDashboard from '@/Components/courses/CoursesDashboard';
import React, { useEffect, useState } from 'react';
import person from "../../../asstes/images/person2.jpg";
import Image from 'next/image';
import Link from 'next/link';

const CourseDashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const categories = ['Notice', 'Members', 'Assignments', 'Grades', 'Resourses'];
    const handleTabClick = (index) => {
        setTabIndex(index);
    };
    return (
        <div className='pt-32 w-3/4 mx-auto mb-10'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='border-4 border-[#0083db] p-5 rounded-lg'>
                    <div className="w-80 h-80 relative text-center">
                        <Image
                            className="rounded-lg w-full h-full object-cover border border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <div className='pb-4 pt-2'>
                        <h3 className='text-4xl text-[#0083db] font-semibold'>Web Development</h3>
                        <h5 className='font-semibold text-2xl'>Anil Sharkar</h5>
                    </div>
                    <div className=''>
                        {categories.map((category, index) => (
                            <Link
                                href='#'
                                key={index}
                                className={`font-semibold text-xl mb-2 flex flex-col ${tabIndex === index ? 'tab-active text-[#0083db] pl-2 border-l-2 border-[#0083db]' : ''}`}
                                onClick={() => handleTabClick(index)}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Link>
                        ))}
                        <p className='text-red-600 font-semibold text-xl'>Delete this class</p>
                    </div>
                </div>
                <div className='border-4 border-[#0083db] p-5 col-span-2 rounded-lg'>
                    {/* {menu.filter((item) => item.category === categories[tabIndex]).map(item => (
                        <div item={item} key={item._id}>

                        </div>
                    ))} */}
                </div>
            </div>
            <CoursesDashboard />
        </div>
    );
};

export default CourseDashboard;