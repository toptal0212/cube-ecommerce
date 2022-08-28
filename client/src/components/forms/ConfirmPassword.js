import React from "react";

const ConfirmPassword = (props) => {
	return (
		<>
			<div id="confirmPassword" className="flex flex-col w-4/5 gap-1 ">
				<label
					htmlFor="confirmPassword"
					className="font-medium text-lightishBlack text-sm"
				>
					Confirm Password
				</label>
				<input
					type={props.visible ? "text" : "password"}
					name="ConfirmPassword"
					value={props.confirmPassword}
					onChange={props.changeConfirmPasswordValue}
					className="border-lightishGray rounded-md border-2 py-1 px-4 outline-none w-full transition-all ease-out duration-300 focus:outline-lightishBlue outline-4 outline-offset-0 text-base"
				/>
			</div>
		</>
	);
};

export default ConfirmPassword;
