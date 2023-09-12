"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Lottie from 'react-lottie';
import classroomAnimate from "../../../public/classroom.json";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiOutlineBookOpen, HiOutlineUserGroup } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import axios from "axios";

const Courses = () => {
  const [courseName, setCourseName] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const { data: session } = useSession();
  const [courseData, setCourseData] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [joinPassword, setJoinPassword] = useState("");

  // Create Class and Create unique chat for course
  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (session) {
      const { user } = session;
      const loggedInUserEmail = user.email;
      const loggedInUserName = user.name;
      const loggedInUserImage = user.image;
      const apiUrl = "https://api.chatengine.io/chats/";

      try {
        // Create Chat group for the course
        const chatResponse = await axios.put(
          apiUrl,
          {
            username: [loggedInUserName],
            title: courseName,
            is_direct_chat: "true",
          },
          {
            headers: {
              "Project-ID": "41415912-8be4-4c8a-9d10-1fe5e47be186",
              "User-Name": loggedInUserName,
              "User-Secret": loggedInUserEmail,
            },
          }
        );

        const userData = chatResponse.data;
        // console.log(userData);

        const formData = {
          courseName,
          picture,
          password,
          chatID: userData.id,
          chatAccessKey: userData.access_key,
          members: [
            {
              email: loggedInUserEmail,
              role: "owner",
              username: loggedInUserName,
              image: loggedInUserImage,
            },
          ],
          ownerName: loggedInUserName,
          ownerEmail: loggedInUserEmail,
        };

        // Send formData to backend API for storage in MongoDB
        const res = await fetch("/api/courses/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error creating chat or course:", error);
      }
    }
  };

  // Fetch courses based on user's email
  useEffect(() => {
    async function fetchCourses() {
      try {
        if (session) {
          const loggedInUserEmail = session.user.email;
          const response = await fetch("/api/courses/create");
          const data = await response.json();
          const filteredCourses = data.courses.filter((item) =>
            item.members.some((member) => member.email === loggedInUserEmail)
          );
          setCourseData(filteredCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourses();
  }, [session]);

  // joining a class
  const handleJoin = async (courseId, password) => {
    if (session) {
      const loggedInUserEmail = session.user.email;
      const loggedInUserName = session.user.name;
      const loggedInUserImage = session.user.image;
      const formData = {
        course_id: courseId,
        password,
        email: loggedInUserEmail,
        role: "student",
        username: loggedInUserName,
        image: loggedInUserImage,
      };

      const res = await fetch("/api/courses/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      try {
        const res = await fetch(
          "http://localhost:3000/api/courses/" + courseId,
          {
            method: "GET",
          }
        );

        if (res.ok) {
          const data = await res.json();
          const chatID = data.chatID;
          const ownerName = data.ownerName;
          const ownerEmail = data.ownerEmail
          console.log(data);
          const chatMember = await axios.post(
            `https://api.chatengine.io/chats/${chatID}/people/`,
            {
              username: loggedInUserName,
            },
            {
              headers: {
                "Project-ID": "41415912-8be4-4c8a-9d10-1fe5e47be186",
                "User-Name": ownerName,
                "User-Secret": ownerEmail,
              },
            }
          );
          const userData = chatMember.data;
          console.log(userData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error joining class:", error);
      }
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: classroomAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="text-justify px-7 w-3/4 mx-auto mb-10 pt-32">
      <div className="flex justify-end">
        <div className="mr-5">
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-[#0083db] text-white"
            onClick={() => window.my_modal_5.showModal()}
          >
            Create Class
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Name</span>
                  </label>
                  <input
                    type="text"
                    name="course name"
                    placeholder="Course Name"
                    className="input input-bordered"
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Picture</span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    placeholder="Course picture URL"
                    className="input input-bordered"
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-control mt-2">
                  <button
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Create Class
                  </button>
                  <button className="btn bg-red-600 text-white hover:bg-red-700">
                    Close
                  </button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
        <div>
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-[#0083db] text-white"
            onClick={() => window.my_modal_6.showModal()}
          >
            Join Class
          </button>
          <dialog
            id="my_modal_6"
            className="modal modal-bottom sm:modal-middle"
          >
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course ID</span>
                  </label>
                  <input
                    type="text"
                    name="course id"
                    placeholder="Course ID"
                    className="input input-bordered"
                    onChange={(e) => setCourseId(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setJoinPassword(e.target.value)}
                  />
                </div>
                <div className="form-control mt-2">
                  <form method="dialog">
                    <button
                      className="btn bg-blue-600 text-white hover:bg-blue-700 px-[121px]"
                      type="submit"
                      onClick={() => handleJoin(courseId, joinPassword)}
                    >
                      Join Class
                    </button>
                  </form>
                  <button className="btn bg-red-600 text-white hover:bg-red-700">
                    Close
                  </button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      {/* When a student or teacher doesn't have any classes it will show below lottie file and text */}
      <div>
        {/* <div className='rounded md:w-3/4 mx-auto'>
          <Lottie options={defaultOptions} height={400} />
        </div>
        <h3 className='text-2xl font-semibold text-center py-5 text-[#0083db]'>You have no classes...</h3> */}
      </div>
      {/* When a teacher or student have classes it will show classes with information */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {courseData.map((item) => (
            <Link href={`/courses/${item?._id}`} item={item} key={item._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                {/* <figure>
                  {item.picture ? (
                    <img src={item.picture} />
                  ) : (
                    <img src="https://i.ibb.co/HKpzcHd/joanna-kosinska-b-F2vsuby-Hc-Q-unsplash.jpg" />
                  )}
                </figure> */}
                <figure>
                  <img src="https://i.ibb.co/HKpzcHd/joanna-kosinska-b-F2vsuby-Hc-Q-unsplash.jpg" />
                </figure>
                <div className="avatar-group -space-x-7 absolute top-[47%] right-3">
                  {item.members.slice(0, 4).map((member, index) => (
                    <div className="avatar" key={index}>
                      <div className="w-12">
                        <img src={member.image} />
                      </div>
                    </div>
                  ))}
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                      <span>+{item.members.length}</span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="badge badge-info badge-outline badge-lg font-bold">
                    Active
                  </div>
                  <h2 className="text-2xl font-bold">{item.courseName}</h2>
                  <div className="flex gap-3">
                    <GiTeacher size="1.6em" />
                    <h2 className="text-lg font-bold">{item.ownerName}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg font-medium">4.0(75 reviews)</h1>
                    <div className="flex items-center">
                      <AiFillStar size="1.6em" color="#FDCC0D" />
                      <AiFillStar size="1.6em" color="#FDCC0D" />
                      <AiFillStar size="1.6em" color="#FDCC0D" />
                      <AiFillStar size="1.6em" color="#FDCC0D" />
                      <AiOutlineStar size="1.6em" />
                    </div>
                  </div>
                  <div className="card-actions justify-between mt-6">
                    <div className="flex items-center gap-2">
                      <HiOutlineUserGroup size="1.9em" />
                      <h1 className="text-lg">{item.members.length} people</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiOutlineBookOpen size="1.9em" />
                      <h1 className="text-lg">3 lessons</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
