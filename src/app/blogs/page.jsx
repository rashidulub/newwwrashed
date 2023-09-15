'use client'
import Layout from "@/component/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

const Blogs = ({ params }) => {

<<<<<<< HEAD
	if (status === "unauthenticated") {
		return <p>Access Denied</p>
	}
	// const [formData, setFormData] = useState({
	// 	fastName: "",
	// 	lastName: "",
	// })
	// const { fastName, lastName } = formData
=======
	const [blogs, setBlogs] = useState([]);
	const blogsId = params.id;
>>>>>>> d93297163a0f43f4111bbbb1152255426b2094cd

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
			const result = await fetch("https://ed-nexus.vercel.app/api/blogs", {
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
		// 		const response = await fetch("https://ed-nexus.vercel.app/api/blogs");
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
		fetch('https://ed-nexus.vercel.app/api/blogs')
			.then(res => res.json())
			.then(data => setBlogs(data))
			.catch(error => console.log(error))
	}, []);
	return (
<<<<<<< HEAD
		<Layout>
			<div className="text-justify px-7 mb-10 ">

				<form onSubmit={handleUser}>
					<input className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black" onBlur={handleInputData} name="fastName" placeholder="type Your fast name" type="text" />
					<input className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black" onBlur={handleInputData} name='lastName' placeholder="type Your last name" type="text" />
					<button type="submit">Submit</button>
				</form>
				<h1 className="text-center text-3xl text-blue-500 ">
					Why Choose Ed Nexus?
				</h1>
				<p className="text-justify">
					Seamless Integration: Ed Nexus seamlessly integrates all the tools you
					need for a dynamic virtual classroom experience. From assignments and
					quizzes to discussions and announcements, everything you need is just a
					click away.
				</p>
				<p className="text-justify">
					Global Reach: Connect with students and instructors from around the
					world. Break down geographical barriers and foster a diverse learning
					community where perspectives from different cultures enrich the
					educational experience.
				</p>
				<p className="text-justify">
					Effortless Assignments: Create, distribute, and manage assignments
					effortlessly. Ed Nexus provides intuitive assignment tools that allow
					you to set deadlines, attach resources, and provide clear instructions
					to your students.
				</p>
				<p className="text-justify">
					Collaborative Learning: Foster collaboration among students with
					interactive discussion boards. Encourage thoughtful dialogue, knowledge
					sharing, and peer-to-peer learning in a secure online environment.
				</p>
				<p className="text-justify">
					Real-time Communication: Instant messaging and announcement features
					ensure that communication remains open and transparent. Keep students
					informed about updates, events, and important information in real time.
				</p>
				<p className="text-justify">
					Progress Tracking: Stay on top of your students progress with detailed
					analytics and progress tracking features. Understand individual
					performance, identify areas for improvement, and provide timely support
					when needed.
				</p>
				<p className="text-justify">
					Top-notch Security: We prioritize your privacy and data security. Ed
					Nexus employs advanced security measures to ensure that your information
					remains confidential and protected.
				</p>
				<p className="text-justify">
					Top-notch Security: We prioritize your privacy and data security. Ed
					Nexus employs advanced security measures to ensure that your information
					remains confidential and protected.
				</p>
			</div>
		</Layout>
=======
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

>>>>>>> d93297163a0f43f4111bbbb1152255426b2094cd
	);
};

export default Blogs;
