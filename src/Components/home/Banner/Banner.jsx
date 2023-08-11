import React from "react";
import ContentBanner from "./ContentBanner";
import ImageBanner from "./ImageBanner";
import Image from "next/image";
import bannerImage from '../../../asstes/banner.png'

const Banner = () => {
	return (
		<div className="px-[1.3rem]">
			<div className="flex flex-col lg:flex-row gap-20 lg:gap-0 items-center justify-between">
				<ContentBanner />
				<div>
					<Image className='rounded-br-[60px] h-auto'
						src={bannerImage}
						alt="Picture of the author"
					/>
				</div>
				{/* <div className="relative -right-[18.2%] pr-64 -top-5">
					<ImageBanner />
					<div className="bg-[#0083db] absolute right-64 top-0 -z-10 rounded-tl-[80px] rounded-br-[80px] h-[25.5rem] w-[300px]"></div>
				</div> */}
			</div>
		</div>
	);
};

export default Banner;
