import React from "react";

const LoginMessage = (props) => {
	return (
		<>{props.message && <p className="text-redError text-center">{props.message}</p>}</>
	);
};

export default LoginMessage;
