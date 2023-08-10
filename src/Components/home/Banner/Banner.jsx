import React from "react";
import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";

const Banner = () => {
	return (
		<div className="px-[1.3rem]">
			<div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
				<div className="w-full mx-auto lg:w-1/2">
					<ContentBanner />
				</div>
				<div className="w-full mx-auto lg:w-1/2 relative">
					<ImageBanner />
					<div className="bg-[#0083db] absolute right-64 top-0 -z-10 rounded-tl-[80px] rounded-br-[80px] h-[25.5rem] w-[300px]"></div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
