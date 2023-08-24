/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SocialLogin = ({ callbackUrl }) => {
	return (
		<div className="mt-6">
			<div className="divider font-semibold my-6">OR</div>
			<div className="relative">
				<div className="absolute left-4 top-[20%] text-black">
					<img
						src="https://i.ibb.co/GW2pwSv/google.png"
						alt=""
						className="w-[30px]"
					/>
				</div>
				<button
					onClick={() => signIn("google", { callbackUrl })}
					className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
				>
					SignIn With Google
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
