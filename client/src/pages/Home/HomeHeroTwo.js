import React from "react";
import cube from "../../assets/cubeDark.svg";
import { Link } from "react-router-dom";
const HomeHeroTwo = () => {
	return (
		<section id="home-hero-two">
			<div
				id="home-hero-two-container"
				className="w-full flex flex-col gap-8 justify-center items-center py-8 md:flex-row lg:gap-24"
			>
				<img className="w-48 xsm:w-64 md:w-80 lg:w-96" src={cube} alt="cube" />

				<div
					id="home-hero-one-header"
					className="flex flex-col gap-4 text-center items-center z-10 justify-center md:items-start md:text-left"
				>
					<h1 className="font-bold text-3xl w-64 xsm:w-80 sm:w-[28rem] md:w-72 xl:text-4xl xl:w-96">
						Keeping up with the latest fashion trends
					</h1>
					<p className="w-64 xsm:w-96 sm:w-[32rem] md:w-80 font-light lg:w-[28rem]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<button className="bg-lightishBlack text-white w-fit text-xl py-2 px-4 rounded-full font-semibold hover:bg-black">
						<Link to="/shop">Shop Now</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default HomeHeroTwo;
