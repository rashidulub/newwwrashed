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
    const categoryContent = {
        Notice: <div>
            <div className='flex justify-between'>
                <h2 className="font-bold text-2xl text-[#0083db] mx-10">Notices</h2>
                <div className='me-10'>
                    {/* Open the modal using ID.showModal() method */}
                    <button className="btn bg-[#0083db] text-white" onClick={() => window.my_modal_5.showModal()}>New Notice</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <form method="dialog" className="modal-box">

                            <textarea className="textarea textarea-info w-full flex" placeholder="Notice Text"></textarea>

                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-[#0083db] text-white">POST</button>
                                <button className="btn bg-[#d83e26] text-white">Cancel</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>

            <div className="card bg-base-100 my-5 p-2 shadow">
                {/* <figure className="avatar">
                <div className="w-1/2 rounded-xl mx-auto">
                  <Image src={item.picture} alt="My Image" width={200} height={200} />
                </div>
              </figure> */}
                <div className="card-body ">
                    <h2 className="card-title text-[#0083db]">Robert Bruce</h2>
                    <p className=' font-semibold'><span>27/07/2023</span> <span className='px-6'>7.30 PM</span> </p>
                    <p className="text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam aliquid doloremque quod suscipit optio maxime quia sed, natus voluptates alias veritatis unde, nobis hic temporibus vitae beatae velit quas!
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 my-5 p-2 shadow">
                {/* <figure className="avatar">
                <div className="w-1/2 rounded-xl mx-auto">
                  <Image src={item.picture} alt="My Image" width={200} height={200} />
                </div>
              </figure> */}
                <div className="card-body ">
                    <h2 className="card-title text-[#0083db]">Robert Bruce</h2>
                    <p className=' font-semibold'><span>07/07/2023</span> <span className='px-6'>5.30 PM</span> </p>
                    <p className="text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam aliquid doloremque quod suscipit optio maxime quia sed, natus voluptates alias veritatis unde, nobis hic temporibus vitae beatae velit quas!
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 my-5 p-2 shadow">
                {/* <figure className="avatar">
                <div className="w-1/2 rounded-xl mx-auto">
                  <Image src={item.picture} alt="My Image" width={200} height={200} />
                </div>
              </figure> */}
                <div className="card-body ">
                    <h2 className="card-title text-[#0083db]">Robert Bruce</h2>
                    <p className=' font-semibold'><span>02/07/2023</span> <span className='px-6'>4.15 PM</span> </p>
                    <p className="text-base text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iste libero reprehenderit quis sit ea ducimus beatae laudantium totam doloremque, eos, voluptatum distinctio voluptatem incidunt in. Omnis eum sapiente non!
                    </p>
                </div>
            </div>
        </div>,
        Members: <div>
            <h2 className="font-semibold text-2xl text-[#0083db]">Members</h2>
            <div className='shadow grid grid-cols-3 font-semibold p-3 rounded-lg mt-4'>
                <h4 className='col-span-1'>Name</h4>
                <h4>Roll No.</h4>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>01</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Habiba Khatun</h4>
                </div>
                <h4>02</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>03</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>04</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>05</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>06</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>07</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>08</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>09</h4>
                <p>...</p>
            </div>
            <div className='shadow justify-between flex font-semibold p-3 rounded-lg mt-4'>
                <div className='flex gap-3 items-center'>
                    <div className="w-10 h-10 relative text-center">
                        <Image
                            className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                            src={person.src}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <h4 className='col-span-1'>Ashraful Khan</h4>
                </div>
                <h4>10</h4>
                <p>...</p>
            </div>
        </div>,
        Assignments: "Assignments content goes here",
        Grades: "Grades content goes here",
        Resourses: "Resources content goes here",
    };
    return (
        <div className='pt-32 w-3/4 mx-auto mb-10'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='border-4 border-[#0083db] p-5 rounded-lg'>
                    <div className="w-80 h-80 relative text-center">
                        <Image
                            className="rounded-lg w-full h-full object-cover border border-[#0083db]"
                            src={'https://i.ibb.co/hg4p7QB/php.png'}
                            width={600}
                            height={600}
                            alt="user photo"
                        />
                    </div>
                    <div className='pb-4 pt-2'>
                        <h3 className='text-4xl text-[#0083db] font-semibold'>Web Development with PHP</h3>
                        <h5 className='font-semibold text-2xl'>Jane Doe</h5>
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
                        <p className='text-red-600 cursor-pointer font-semibold text-xl'>Delete this class</p>
                    </div>
                </div>
                <div className='border-4 border-[#0083db] h-[670px] overflow-y-scroll p-5 col-span-2 rounded-lg'>
                    {/* {menu.filter((item) => item.category === categories[tabIndex]).map(item => (
                        <div item={item} key={item._id}>

                        </div>
                    ))} */}
                    <div className=''>
                        <div>{categoryContent[categories[tabIndex]]}</div>
                    </div>
                </div>
            </div>
            <CoursesDashboard />
        </div>
    );
};

export default CourseDashboard;