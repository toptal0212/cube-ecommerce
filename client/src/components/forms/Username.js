import React from "react";

const Username = (props) => {
	return (
		<div id="username" className="flex flex-col w-4/5 gap-1 ">
			<label
				htmlFor="username"
				className="font-medium text-lightishBlack text-sm"
			>
				Username
			</label>
			<input
				type="text"
				name="username"
				value={props.username}
				onChange={props.changeUsernameValue}
				className="border-lightishGray rounded-md border-2 py-1 px-4 outline-none w-full transition-all ease-out duration-300 focus:outline-lightishBlue outline-4 outline-offset-0 text-base"
			/>
		</div>
	);
};

export default Username;
