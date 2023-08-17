import React from "react";
import Image from "next/image";
import userInterface from "../../../assets/images/usersui.png";
import collaboration from "../../../assets/images/collab.png";
import features from "../../../assets/images/features3.png";
import grading from "../../../assets/images/gradin.png";
import secure from "../../../assets/images/secure.png";
import analytics from "../../../assets/images/analytics.png";

const Features = () => {

	return (
		<div className="py-40">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300 hover:scale-110 duration-300"
						src={userInterface}
						alt="interface"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-3xl font-semibold">
						Intuitive Interface
					</h1>
					<p className="font-semibold font-sans">
						User-friendly, easy to navigate
					</p>
				</div>
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300   hover:scale-110 duration-300"
						src={collaboration}
						alt="collaboration"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-2xl font-semibold">
						Seamless collaboration
					</h1>
					<p className="font-semibold font-sans">
						Real-time teamwork, fluid communication
					</p>
				</div>
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300   hover:scale-110 duration-300"
						src={features}
						alt="features"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-2xl font-semibold">
						Customizable Features
					</h1>
					<p className="font-semibold font-sans">
						Tailor ed options, personalized user experience
					</p>
				</div>
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300   hover:scale-110 duration-300"
						src={grading}
						alt="grading"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-2xl font-semibold">
						Efficient Grading
					</h1>
					<p className="font-semibold font-sans">
						Autom ated assessment, time-saving evaluations
					</p>
				</div>
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300   hover:scale-110 duration-300"
						src={secure}
						alt="secure"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-2xl font-semibold">
						Secure Environment
					</h1>
					<p className="font-semibold font-sans">
						Robust data protection, safety assured
					</p>
				</div>
				<div className="mx-auto text-center space-y-2">
					<Image
						className="mx-auto bg-blue-200 rounded-lg p-3 shadow-md shadow-blue-300   hover:scale-110 duration-300"
						src={analytics}
						alt="analytics"
						width={70}
						height={70}
					/>
					<h1 className="text-[#0083db] text-2xl font-semibold">
						Advanced Analytics
					</h1>
					<p className="font-semibold font-sans">
						In- depth insights, data-driven improvements
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
