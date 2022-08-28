import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<>
			<p className="flex flex-col items-center gap-[5px] xsm:flex-row xsm:items-start">
				Don't have an account?
				<Link to="/register" className="text-darkLightishBlue hover:underline">
					Sign up
				</Link>
			</p>
		</>
	);
};

export default Signup;
