import React from "react";
import CubeLogo from "../CubeLogo";

const FooterLogo = () => {
	return (
		<footer className="h-full flex items-end">
			<div
				id="footerLogo"
				className="w-full p-4 relative bottom-0 flex gap-4 items-center justify-center"
			>
				<CubeLogo />
				<p className="text-center">© 2022 Cube, inc</p>
			</div>
		</footer>
	);
};

export default FooterLogo;
