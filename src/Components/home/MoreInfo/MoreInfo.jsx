import Image from "next/image";
import gellary1 from "@/asstes/gellary1.jpg";
import gellary2 from "@/asstes/gellary2.jpg";
import gellary3 from "@/asstes/gellary3.jpg";
import gellary4 from "@/asstes/gellary4.jpg";

const MoreInfo = () => {
	return (
		<div className="grid grid-cols-2 px-[1.3rem] gap-4 mt-20 w-full">
			<div className="w-fit grid grid-cols-2 gap-4">
				<Image
					width={250}
					height={100}
					alt="carGallary"
					className=" rounded shadow-sm min-h-12 dark:bg-gray-500 "
					src={gellary1}
				/>
				<Image
					alt="foodGallary"
					width={250}
					height={100}
					className=" rounded shadow-sm min-h-48 dark:bg-gray-500 "
					src={gellary3}
				/>
				<Image
					alt="carGallary"
					width={250}
					height={100}
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 "
					src={gellary2}
				/>
				<Image
					width={250}
					height={100}
					alt="foodGallary"
					className="rounded shadow-sm min-h-48 dark:bg-gray-500 "
					src={gellary4}
				/>
			</div>
			<div>
				<h1 className="text-4xl text-[#0083db] font-medium">Learn more</h1>
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
