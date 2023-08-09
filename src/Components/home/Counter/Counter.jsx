"use client";
import React from "react";
import CountUp from "react-countup";

const Counter = () => {
	return (
		<div className="px-5 mt-12 h-[100] w-full bg-primary rounded-lg">
			<div className="flex gap-4 justify-around items-center px-6 py-5">
				<div className="flex flex-col justify-between items-center">
					<div className="flex justify-center items-center">
						<CountUp delay={2} end={100} className="text-white text-5xl" />
						<p className="text-white text-5xl">K+</p>
					</div>
					<p className="text-white">Users</p>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="flex flex-col justify-center items-center">
					<div className="flex justify-center items-center">
						<CountUp delay={2} end={100} className="text-white text-5xl" />
						<p className="text-white text-5xl">K+</p>
					</div>
					<p className="text-white">Users</p>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="flex flex-col justify-center items-center">
					<div className="flex justify-center items-center">
						<CountUp delay={2} end={100} className="text-white text-5xl" />
						<p className="text-white text-5xl">K+</p>
					</div>
					<p className="text-white">Users</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
