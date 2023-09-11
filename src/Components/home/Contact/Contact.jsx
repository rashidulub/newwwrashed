"use client";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import contactUs from '../../../assets/LottieAnimation/contactUs'
import { BsSend } from 'react-icons/bs';
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const contactDetail = async (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl mb-32 border-t-8 border-[#0083db]">
      <div className="p-10">
        <h1 className="text-4xl font-semibold text-[#0083db] mb-7">Contact us</h1>
        <form onSubmit={handleSubmit(contactDetail)}>
          <div className="space-y-6">
            <input
              {...register("name")}
              name="name"
              type="text"
              placeholder="Name"
            className="input input-bordered w-full lg:w-11/12 font-semibold border-2 border-[#EDEFFA]"
            />
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full lg:w-11/12 font-semibold border-2 border-[#EDEFFA]"
            />
            <textarea
              {...register("description")}
              name="description"
              className="textarea textarea-bordered w-full lg:w-11/12 font-semibold border-2 border-[#EDEFFA]"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn btn-outline mt-3 lg:w-11/12" type="submit">
           <div className="flex items-center gap-2">
           <span> Send Message</span>
            <BsSend size="1.4em"/>
           </div>
          </button>
        </form>
      </div>
      <div className="w-full">
      {<Lottie animationData={contactUs} loop={true}></Lottie>}
      </div>
    </div>
  );
};

export default Contact;
