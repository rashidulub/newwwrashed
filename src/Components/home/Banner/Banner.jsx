import React from "react";
import ContentBanner from "./ContentBanner";
import Image from "next/image";
import bannerImage from '../../../asstes/banner.png'

const Banner = () => {
	return (
		<div className="px-[1.3rem]">
			<div className="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center justify-between">
				<ContentBanner />
				<div>
					<Image className='rounded-br-[60px] h-auto'
						src={bannerImage}
						alt="Picture of the author"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
