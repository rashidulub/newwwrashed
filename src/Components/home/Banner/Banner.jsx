import React from "react";
import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";

const Banner = () => {
	return (
		<div className="px-[1.3rem]">
			<div className="flex gap-10 items-center justify-between">
				<div className="">
					<ContentBanner />
				</div>
				<div className="">
					<ImageBanner />
					<div className="bg-[#0083db] rounded-tl-[80px] rounded-br-[80px] h-[22.5rem] w-[260px] absolute top-40 right-64 -z-10"></div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
