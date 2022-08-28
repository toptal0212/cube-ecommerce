import React from "react";

const ButtonForm = (props) => {
	return (
		<>
			<input
				type="submit"
				value={props.text}
				onClick={props.action}
				className="font-semibold text-xl text-white bg-darkLightishBlue w-4/5 rounded-full py-2 cursor-pointer hover:bg-darkerLightishBlue"
			/>
		</>
	);
};

export default ButtonForm;
