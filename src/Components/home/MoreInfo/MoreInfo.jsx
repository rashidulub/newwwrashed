import Image from "next/image";
import gellary1 from "@/assets/gellary1.jpg";
import gellary2 from "@/assets/gellary2.jpg";
import gellary3 from "@/assets/gellary3.jpg";
import gellary4 from "@/assets/gellary4.jpg";

const MoreInfo = () => {
	return (
		<div className="flex flex-col md:flex-col lg:flex-row px-[1.3rem] gap-4 mt-20 w-full py-20">
			<div className="w-fit grid grid-cols-2 gap-4">
				<Image
					alt="carGallary"
					className=" rounded shadow-sm min-h-12 dark:bg-gray-500 h-auto w-[800px]"
					src={gellary1}
				/>
				<Image
					alt="foodGallary"
					className=" rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[800px]"
					src={gellary3}
				/>
				<Image
					alt="carGallary"
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[800px]"
					src={gellary2}
				/>
				<Image
					alt="foodGallary"
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[800px]"
					src={gellary4}
				/>
			</div>
			<div className="space-y-3">
				<h1 className="text-4xl text-[#0083db] font-semibold">Learn more</h1>
				<p className="text-justify">
					Are you ready to embark on an exciting journey of education and
					discovery? Look no further than Ed Nexus, your all-in-one learning hub
					designed to empower educators and learners alike. Just like Google
					Classroom, Ed Nexus is here to revolutionize the way you teach, learn,
					and engage with educational content.
				</p>
			</div>
		</div>
	);
};

export default MoreInfo;
