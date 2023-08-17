"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import Lottie from 'react-lottie';
// import myImage from '../../asstes/images/secure.png';
import classroomAnimate from "../../../public/classroom.json";
import Link from 'next/link';

const Courses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourse(data))
  }, [])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: classroomAnimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="text-justify px-7 mb-10 pt-44">
      {/* When a student or teacher doesn't have any classes it will show below lottie file and text */}
      <div >
        {/* <div className='rounded md:w-3/4 mx-auto'>
          <Lottie options={defaultOptions} height={400} />
        </div>
        <h3 className='text-2xl font-semibold text-center py-5 text-[#0083db]'>You have no classes...</h3> */}
      </div>
      {/* When a teacher or student have classes it will show classes with information */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {
            course.map((item) => (
              <Link href="/blogs" key={item._id}>
                <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                  <figure className="avatar">
                    <div className="w-1/2 rounded-xl mx-auto">
                      <Image src={item.picture} alt="My Image" width={200} height={200} />
                    </div>
                  </figure>
                  <div className="card-body items-center">
                    <h2 className="card-title">{item.courseName}</h2>
                    <p className="text-sm text-gray-600">
                      Instructor: {item.instructorName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Students: {item.membersNo}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courses
