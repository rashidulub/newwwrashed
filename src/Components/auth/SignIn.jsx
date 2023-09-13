"use client";
import Link from "next/link";
import { useState } from "react";
import { FaKey, FaMailBulk } from "react-icons/fa";
import Lottie from "lottie-react";
import login from "../../assets/LottieAnimation/login-lottie.json";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const SignIn = ({ callbackUrl }) => {
	const [load, setLoad] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const handleLoginUser = async (data) => {
		setLoad(true);
		const email = data.email;
		const password = data.password;

		await signIn("credentials", {
			email,
			password,
			callbackUrl
		});
		reset();
		setLoad(false);
		toast.success("Welcome our ED_Nexus", { position: "top-center" });
	};
	console.log({ callbackUrl })
	return (
		<div className="mx-auto pt-48 pb-32 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
			<div className="flex flex-col-reverse items-center justify-between lg:flex-row ">
				<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
					{<Lottie animationData={login} loop={true}></Lottie>}
				</div>
				<div className="w-full max-w-xl xl:px-8 lg:w-5/12">
					<div className="bg-[#0083db] rounded-lg p-7 sm:p-10">
						<h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
							Login
						</h3>
						<form onSubmit={handleSubmit(handleLoginUser)}>
							<div className="mb-1 sm:mb-2">
								<div className="relative  mb-3">
									<FaMailBulk className="absolute left-4 top-[30%] text-black "></FaMailBulk>
									<input
										{...register("email", {
											required: "Email is required",
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: "Email is not valid!",
											},
										})}
										placeholder="Type Your Email" type="text" className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
									/>
									{errors?.email && (
										<p className="text-red-600">{errors?.email.message}</p>
									)}
								</div>
								<div className="relative mb-3">
									<FaKey className="absolute left-4 top-[30%] text-black "></FaKey>
									<input
										{...register("password", {
											required: "Password is required!",
											pattern: {
												value: /(?=.*[!@#$&*])/,
												message:
													"password should be minimum one special character",
											},
											minLength: {
												value: 6,
												message: "password should be must 6 characters",
											},
										})}
										placeholder="password"
										type="password"
										className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
									/>
									{errors?.password && (
										<p className="text-red-600">
											{errors?.password.message}
										</p>
									)}
								</div>
							</div>
							<div className="mt-4 mb-2 sm:mb-4">
								<button
									type="submit"
									className="inline-flex items-center justify-center w-full py-3 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
								>
									{load ? (
										<span className="border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full"></span>
									) : (
										"Login"
									)}
								</button>
							</div>
						</form>
						<div>
							<SocialLogin callbackUrl={callbackUrl}></SocialLogin>
							<div className="text-xs gap-1 text-center text-black sm:text-sm mt-5 cursor-pointer">
								Create an account? <Link href="/signUp" className="font-semibold"> Register</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
