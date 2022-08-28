import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(-1);
		}, 1000);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="text-4xl w-full flex flex-col items-center text-center justify-center transform top-[45%] absolute">
			<h1>Page not available</h1>
			<h1>Redirecting...</h1>
		</div>
	);
};

export default NotFound;
