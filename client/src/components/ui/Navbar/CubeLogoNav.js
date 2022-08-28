import React from "react";
import Cube from "../../../assets/Cube";
import { Link } from "react-router-dom";

const CubeLogoNav = () => {
	return (
		<>
			<Link to="/">
				<div
					id="logo-nav"
					className="hidden flex-col items-center px-4 sm:flex"
				>
					<h1 className="font-bold text-3xl">Cube</h1>
					<Cube></Cube>
				</div>
			</Link>
		</>
	);
};

export default CubeLogoNav;
