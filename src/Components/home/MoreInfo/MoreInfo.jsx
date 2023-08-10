import Image from "next/image";
import gellary1 from "@/asstes/gellary1.jpg";
import gellary2 from "@/asstes/gellary2.jpg";
import gellary3 from "@/asstes/gellary3.jpg";
import gellary4 from "@/asstes/gellary4.jpg";

const MoreInfo = () => {
	return (
		<div className="flex flex-col md:flex-col lg:flex-row px-[1.3rem] gap-4 mt-20 w-full py-20">
			<div className="w-fit grid grid-cols-2 gap-4">
				<Image
					alt="carGallary"
					className=" rounded shadow-sm min-h-12 dark:bg-gray-500 h-auto w-[600px]"
					src={gellary1}
				/>
				<Image
					alt="foodGallary"
					className=" rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[600px]"
					src={gellary3}
				/>
				<Image
					alt="carGallary"
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[600px]"
					src={gellary2}
				/>
				<Image
					alt="foodGallary"
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 h-auto w-[600px]"
					src={gellary4}
				/>
			</div>
			<div>
				<h1 className="text-4xl text-[#0083db] font-semibold">Learn more</h1>
				<p className="mt-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem modi
					minus veniam. Maiores, obcaecati ipsa debitis quisquam odit neque.
					Nam, ipsum? Fugit, tenetur dolores minus esse assumenda similique
					quidem enim?
				</p>
			</div>
		</div>
	);
};

export default MoreInfo;
