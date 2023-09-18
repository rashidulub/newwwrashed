'use client'
import Layout from "@/component/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

const Blogs = ({ params }) => {

	const [blogs, setBlogs] = useState([]);
	const blogsId = params.id;

	const onSubmitBlog = async (data) => {
		const { image, title, author, content, date } = data;
		const newBlog = {
			blogs_id: blogsId,
			image,
			title,
			author,
			content,
			date,
		};

		try {
			const result = await fetch("http://localhost:3000/api/blogs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newBlog),
			});

			if (result.ok) {
				const responseData = await result.json();
				setBlogs((prevBlogs) => [...prevBlogs, responseData]);
				console.log("Blog is added:", responseData);
				toast.success("Blog is Added!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				reset();
				window.my_modal_5.close();
			} else {
				toast.error("Failed to add blog.!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} catch (error) {
			toast.error("An error occurred!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};
	useEffect(() => {
		// const fetchBlogs = async () => {
		// 	try {
		// 		const response = await fetch("http://localhost:3000/api/blogs");
		// 		if (response.ok) {
		// 			const data = await response.json();
		// 			// console.log(data);
		// 			const findBlogs = data.map((item) => item.blogs_id === blogsId);
		// 			setBlogs(findBlogs);
		// 			console.log(findBlogs);
		// 		} else {
		// 			console.error("Failed to fetch blogs.");
		// 		}
		// 	} catch (error) {
		// 		console.error("An error occurred:", error);
		// 	} finally {
		// 		setIsLoading(false);
		// 	}
		// };
		// fetchBlogs();
		fetch('http://localhost:3000/api/blogs')
			.then(res => res.json())
			.then(data => setBlogs(data))
			.catch(error => console.log(error))
	}, []);
	return (
		<div className="py-32 lg:w-3/4 w-11/12 mx-auto">
			<div className="text-end mb-10">
				<button className="px-3 py-2 bg-[#0083db] rounded font-semibold text-white">Add Blogs</button>
			</div>
			<div className="grid grid-cols-3 w-fit gap-5">
				{
					blogs.map(blog => <div className="s-color w-fit p-5 rounded-lg" key={blog.blogs_id}>
						<div className="relative w-full h-56">
							<img className="h-full w-full object-cover rounded-t-lg" src={blog.image} alt="" />
						</div>
						<h1 className="font-bold text-[#0083db] text-3xl pt-3">{blog.title}</h1>
						<p className="font-semibold text-xl pt-1">{blog.author}</p>
						<div className="py-4">
							<span>{blog.content.slice(0, 120)} . . . </span>
							<button className="text-[#0083db]">see more</button>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-2">
								<AiOutlineLike className="text-2xl text-[#0083db]" />
								<p>Like</p>
							</div>
							<div className="flex items-center gap-2">
								<AiOutlineDislike className="text-2xl text-[#0083db]" />
								<p>Dislike</p>
							</div>
							<div className="flex items-center gap-2">
								<BiCommentDetail className="text-2xl text-[#0083db]" />
								<p>Comment</p>
							</div>
						</div>
					</div>)
				}
			</div>
		</div>

	);
};

export default Blogs;
