import React from "react";
import Cube from "../../assets/Cube";
import { Link } from "react-router-dom";

const Success = () => {
	return (
		<div
			id="success-container"
			className="flex flex-col fixed justify-center items-center top-[30%] left-1/2 translate-x-[-50%] translate-y[-50%] bg-lightGray py-12 px-8 rounded-md gap-2 w-[16rem] text-center xxsm:w-[22rem] md:w-[40rem]"
		>
			<Cube />
			<h1 className="text-lg md:text-3xl font-bold">
				Thank you for your purchase
			</h1>
			<div className="font-medium flex gap-1 text-sm text-center flex-col md:text-base md:flex-row">
				<p>If you have any questions, please email</p>
				<p className="text-darkLightishBlue cursor-pointer">
					orders@example.com
				</p>
			</div>
			<Link
				to="/"
				className="font-semibold text-xl text-white bg-darkLightishBlue py-2 px-4 mt-4 rounded-md hover:bg-darkerLightishBlue transition-all ease-in-out duration-300"
			>
				Continue shopping
			</Link>
		</div>
	);
};

export default Success;
