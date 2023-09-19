'use client'
import React from 'react';
import { useEffect, useState } from 'react';

const BlogDetails = ({ params }) => {
    console.log(params);
    const [singleBlog, setSingleBlog] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
            .then(res => res.json())
            .then(data => {
                const blog = data.find(item => item._id === params.id)
                setSingleBlog(blog)
            })
            .catch(error => console.log(error))
    }, []);
    console.log(singleBlog);
    return (
        <div className='pt-32 mb-20 lg:w-3/4 w-11/12 mx-auto'>
            <div>
                <h1 className='text-5xl border-l-4 border-[#0083db] pl-5 py-2 font-semibold'>{singleBlog.title}</h1>
                <div></div>
            </div>
            <div className='flex gap-4 pt-8 pb-5'>
                <div className='relative h-14 w-14'>
                    <img className='w-full h-full rounded-full object-cover border-2 border-[#0083db]' src={singleBlog.photo} alt="" />
                </div>
                <div>
                    <h5 className='text-xl font-semibold'>{singleBlog.author}</h5>
                    <p>Sep 18, 2023</p>
                </div>
            </div>
            <div>
                <div className="relative w-full h-96 pb-10">
                    <img className="h-full w-full object-cover rounded-lg" src={singleBlog.image} alt="" />
                </div>
                <p>{singleBlog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetails;