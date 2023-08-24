"use client";
import CoursesDashboard from "@/Components/courses/CoursesDashboard";
import React, { useEffect, useState } from "react";
import person from "../../../asstes/images/person2.jpg";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import { useForm } from "react-hook-form";

const CourseDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const categories = [
    "Notice",
    "Members",
    "Assignments",
    "Grades",
    "Resourses",
  ];
  const [rangeValue, setRangeValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTabClick = (index) => {
    setTabIndex(index);
  };
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const onSubmit = async (data) => {
    const { title, description,startDate,For,topic,attachments } = data;
    const newAssignment = {
      course_id: "",
      title,
      description,
      due_date: startDate,
      attachments: [
        {
          url: attachments
        }
      ],
      submissions: [],
      notices: [],
      comments: [],
      reviews: [],
      For: For,
      topic: topic,
      total_mark: rangeValue
    };
  
    try {
      const result = await fetch("http://localhost:3000/api/assignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      });
  
      if (result.ok) {
        const responseData = await result.json();
        console.log("Assignment added:", responseData);
      } else {
        console.error("Failed to add assignment.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  

  const categoryContent = {
    Notice: (
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-[#0083db] mx-10">Notices</h2>
          <div className="me-10">
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn bg-[#0083db] text-white"
              onClick={() => window.my_modal_5.showModal()}
            >
              New Notice
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <form method="dialog" className="modal-box">
                <textarea
                  className="textarea textarea-info w-full flex"
                  placeholder="Notice Text"
                ></textarea>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-[#0083db] text-white">POST</button>
                  <button className="btn bg-[#d83e26] text-white">
                    Cancel
                  </button>
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
            <p className=" font-semibold">
              <span>27/07/2023</span> <span className="px-6">7.30 PM</span>{" "}
            </p>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              aliquam aliquid doloremque quod suscipit optio maxime quia sed,
              natus voluptates alias veritatis unde, nobis hic temporibus vitae
              beatae velit quas!
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
            <p className=" font-semibold">
              <span>07/07/2023</span> <span className="px-6">5.30 PM</span>{" "}
            </p>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              aliquam aliquid doloremque quod suscipit optio maxime quia sed,
              natus voluptates alias veritatis unde, nobis hic temporibus vitae
              beatae velit quas!
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
            <p className=" font-semibold">
              <span>02/07/2023</span> <span className="px-6">4.15 PM</span>{" "}
            </p>
            <p className="text-base text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, iste libero reprehenderit quis sit ea ducimus beatae
              laudantium totam doloremque, eos, voluptatum distinctio voluptatem
              incidunt in. Omnis eum sapiente non!
            </p>
          </div>
        </div>
      </div>
    ),
    Members: (
      <div>
        <h2 className="font-semibold text-2xl text-[#0083db]">Members</h2>
        <div className="shadow grid grid-cols-3 font-semibold p-3 rounded-lg mt-4">
          <h4 className="col-span-1">Name</h4>
          <h4>Roll No.</h4>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>01</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Habiba Khatun</h4>
          </div>
          <h4>02</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>03</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>04</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>05</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>06</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>07</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>08</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>09</h4>
          <p>...</p>
        </div>
        <div className="shadow justify-between flex font-semibold p-3 rounded-lg mt-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 relative text-center">
              <Image
                className="rounded-full w-full h-full object-cover border-2 border-[#0083db]"
                src={person.src}
                width={600}
                height={600}
                alt="user photo"
              />
            </div>
            <h4 className="col-span-1">Ashraful Khan</h4>
          </div>
          <h4>10</h4>
          <p>...</p>
        </div>
      </div>
    ),
    Assignments: (
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-[#0083db] mx-10">
            Assignment
          </h2>
          <div className="me-10">
            <button
              className="btn bg-[#0083db] text-white"
              onClick={() => window.my_modal_4.showModal()}
            >
              New Assignment
            </button>
            <dialog id="my_modal_4" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2 className="font-bold text-4xl text-[#0083db] text-center">
                  Assignment
                </h2>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="form-control w-full space-y-3 shadow-2xl rounded-2xl p-5">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Title
                        </span>
                      </label>
                      <input
                        type="text"
                        {...register("title", { required: true })}
                        name="title"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full"
                      />
                      {errors.name && (
                        <span className="text-red-600">title is required</span>
                      )}
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Instruction
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-primary"
                        placeholder="Instruction (optional)"
                        {...register("description")}
                        name="description"
                      ></textarea>
                    </div>
                    <div className="form-control w-full space-y-3 shadow-2xl rounded-2xl p-5 mt-5">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Attach Link
                        </span>
                      </label>
                      <input
                        type="text"
                        className="file-input file-input-bordered file-input-primary w-full px-4"
                        {...register("attachments")}
                        name="attachments"
                        placeholder="Give Link Here"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 shadow-2xl rounded-2xl p-5">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Due
                        </span>
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        filterTime={filterPassedTime}
                        className="input input-bordered input-primary w-full"
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">
                            Close submissions after due date
                          </span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Topic
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full"
                        {...register("topic")}
                        name="topic"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          <p>Marks: {rangeValue}</p>
                        </span>
                      </label>
                      <input
                        type="range"
                        min={0}
                        max="100"
                        value={rangeValue}
                        className="range range-primary"
                        onChange={(event) =>
                          setRangeValue(Number(event.target.value))
                        }
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          For
                        </span>
                      </label>
                      <select
                        className="select select-bordered w-full max-w-xs"
                        {...register("For")}
                        name="For"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option>All Student</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    className="btn bg-[#0083db] text-white"
                    type="submit"
                  >Assign</button>
                  <button className="btn bg-[#d83e26] text-white">
                    Cancel
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    ),
    Grades: "Grades content goes here",
    Resourses: "Resources content goes here",
  };
  return (
    <div className="pt-32 w-3/4 mx-auto mb-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="border-4 border-[#0083db] p-5 rounded-lg">
          <div className="w-80 h-80 relative text-center">
            <Image
              className="rounded-lg w-full h-full object-cover border border-[#0083db]"
              src={"https://i.ibb.co/hg4p7QB/php.png"}
              width={600}
              height={600}
              alt="user photo"
            />
          </div>
          <div className="pb-4 pt-2">
            <h3 className="text-4xl text-[#0083db] font-semibold">
              Web Development with PHP
            </h3>
            <h5 className="font-semibold text-2xl">Jane Doe</h5>
          </div>
          <div className="">
            {categories.map((category, index) => (
              <Link
                href="#"
                key={index}
                className={`font-semibold text-xl mb-2 flex flex-col ${
                  tabIndex === index
                    ? "tab-active text-[#0083db] pl-2 border-l-2 border-[#0083db]"
                    : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
            <p className="text-red-600 cursor-pointer font-semibold text-xl">
              Delete this class
            </p>
          </div>
        </div>
        <div className="border-4 border-[#0083db] h-[670px] overflow-y-scroll p-5 col-span-2 rounded-lg">
          {/* {menu.filter((item) => item.category === categories[tabIndex]).map(item => (
                        <div item={item} key={item._id}>

                        </div>
                    ))} */}
          <div className="">
            <div>{categoryContent[categories[tabIndex]]}</div>
          </div>
        </div>
      </div>
      <CoursesDashboard />
    </div>
  );
};

export default CourseDashboard;
