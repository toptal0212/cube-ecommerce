import React from "react";

const DashedLinesRegister = () => {
	return (
		<>
			<div
				id="dashed-lines"
				className="border-r-2 border-lightGray w-0 h-52 border-dashed absolute right-0 -bottom-[216px]"
			></div>
			<div
				id="dashed-lines"
				className="border-r-2 border-lightGray w-0 h-52 border-dashed absolute -top-[136px]"
			></div>
		</>
	);
};

export default DashedLinesRegister;
