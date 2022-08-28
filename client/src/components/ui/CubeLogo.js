import React from "react";
import Cube from "../../assets/Cube";

const CubeLogo = () => {
	return (
		<div id="logo-nav" className="flex-col flex items-center px-4">
			<h1 className="font-bold text-3xl">Cube</h1>
			<Cube></Cube>
		</div>
	);
};

export default CubeLogo;
