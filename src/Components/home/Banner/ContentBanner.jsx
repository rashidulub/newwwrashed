import React from "react";

const ContentBanner = () => {

	return (
		<div className="space-y-3">
			<div className="top-10">
				<h1 className="text-5xl font-semibold">
					Where Teaching and Learning
					<span className='text-blue-500'> Unite for Growth</span>
				</h1>
				<p>
					Nurturing knowledge and fostering connections in a dynamic realm of collaborative education. Join us to shape the future of learning together
				</p>
				<button className="btn btn-primary bg-[#0083db] btn-md mt-5">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default ContentBanner;
