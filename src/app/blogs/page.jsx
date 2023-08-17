'use client'
import axios from "axios";
import { useState } from "react";

const Blogs = () => {
	const [formData, setFormData] = useState({
		fastName: "",
		lastName: "",
	})
	const { fastName, lastName } = formData

	// get input value
	const handleInputData = (event) => {
		const name = event.target.name
		const value = event.target.value

		setFormData({ ...formData, [name]: value })
	}
	const handleUser = async (event) => {
		event.preventDefault()
		const newUser = { fastName, lastName }
		console.log(newUser)
		try {
			const res = await axios.post("/api/blogs", { newUser })
			const data = res.data
			console.log(data)

		} catch (error) {
			console.log(error)
		}
	}
	return (
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
	);
};

export default Blogs;
