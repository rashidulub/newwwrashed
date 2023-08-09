"use client";
import React from "react";
import CountUp from "react-countup";

const Counter = () => {
	return (
		<div className="h-[100] mt-20 py-8 mx-[1.3rem] bg-[#0083db] rounded-lg">
			<div className="flex gap-4 justify-around items-center px-6 py-5">
				<div className="flex flex-col justify-between items-center">
					<div className="flex justify-center items-center">
						<CountUp
							delay={2}
							end={100}
							className="text-white text-6xl font-semibold"
						/>
						<p className="text-white text-6xl font-semibold">K+</p>
					</div>
					<p className="text-white text-2xl font-semibold">Users</p>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="flex flex-col justify-center items-center">
					<div className="flex justify-center items-center">
						<CountUp
							delay={2}
							end={50}
							className="text-white text-6xl font-semibold"
						/>
						{/* <p className="text-white text-6xl font-semibold">K+</p> */}
					</div>
					<p className="text-white text-2xl font-semibold">Awards</p>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="flex flex-col justify-center items-center">
					<div className="flex justify-center items-center">
						<CountUp
							delay={2}
							end={8}
							className="text-white text-6xl font-semibold"
						/>
						<p className="text-white text-6xl font-semibold">K+</p>
					</div>
					<p className="text-white text-2xl font-semibold">VIP Users</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
