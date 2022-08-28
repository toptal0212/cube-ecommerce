import React from "react";

const AccountBackground = () => {
	return (
		<>
			<div
				id="path-background"
				className="path-background fixed w-[1920px] h-[40rem] transition-all ease-in-out duration-300 -top-52 bg-backgroundBlue -z-10 lg:top-0"
			></div>
			<div
				id="path-background-tri"
				className="path-background-tri fixed w-48 h-28 bg-lightishBlue transition-all ease-in-out duration-300 top-[185px]  left-96 rotate-[19deg] -z-10 lg:top-[393px]"
			></div>
		</>
	);
};

export default AccountBackground;
