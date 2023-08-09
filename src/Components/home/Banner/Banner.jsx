import React from "react";
import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";

const Banner = () => {
	return (
		<div className="px-[1.3rem]">
			<div className="flex gap-10 items-center justify-between mt-10">
				<div className="">
					<ContentBanner />
				</div>
				<div className="">
					<ImageBanner />
				</div>
			</div>
		</div>
	);
};

export default Banner;
