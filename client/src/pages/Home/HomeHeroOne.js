import React from "react";
import darkPants from "../../assets/darkpants.jpg";
import whiteShirt from "../../assets/whiteshirt.jpg";
import { Link } from "react-router-dom";

const HomeHeroOne = () => {
	return (
		<>
			<section id="home-hero-one">
				<div className="w-full h-[44rem] py-4 bg-whiteGray flex-col flex justify-center items-center relative xsm:h-[40rem] sm:pt-8 md:flex-row md:h-[28rem] md:p-0 lg:gap-16">
					<div
						id="ninety-triangle"
						className="h-full w-full absolute bg-lightGray ninety-tri"
					></div>
					<div
						id="home-hero-one-header"
						className="flex flex-col gap-4 text-center items-center z-10 justify-center md:items-start md:text-left"
					>
						<h1 className="font-bold text-3xl w-64 xsm:w-80 sm:w-[28rem] md:w-72 xl:text-5xl xl:w-96">
							Keep it simple by shopping at Cube
						</h1>
						<p className="w-64 xsm:w-96 sm:w-[32rem] md:w-80 lg:w-[28rem] font-light">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
							repudiandae eos iusto temporibus velit fugit molestias accusantium
							perspiciatis aliquid maiores.
						</p>
						<button className="bg-darkLightishBlue text-white w-fit text-xl py-2 px-4 rounded-full font-semibold hover:bg-darkerLightishBlue">
							<Link to="/shop">See Latest Products</Link>
						</button>
					</div>
					<div
						id="home-hero-one-images"
						className="relative h-[20rem] w-[16rem] flex xsm:w-[20rem] z-10 sm:w-[28rem] sm:h-96 md:w-72 lg:w-96 lg:h-full xl:w-[28rem]"
					>
						<img
							src={whiteShirt}
							alt="whiteshirt"
							className="absolute w-72 top-16 xsm:top-12 sm:w-80 sm:left-12 md:w-56 md:left-6 lg:w-80 xl:w-[20rem] xl:top-12"
						/>
						<img
							src={darkPants}
							alt="darkpants"
							className="absolute w-28 top-32 right-0 xsm:w-32 xsm:top-32 sm:right-12 sm:w-36 sm:top-36 md:w-32 md:right-6 md:top-28 lg:w-40 lg:top-36 lg:right-0 xl:top-40 xl:right-12"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeHeroOne;
