import React from "react";
import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";

const Banner = () => {
	return (
		<div className="flex items-center justify-between mt-10 px-5">
			<div className="">
				<ContentBanner />
			</div>
			<div className="">
				<ImageBanner />
			</div>
		</div>
	);
};

export default Banner;
