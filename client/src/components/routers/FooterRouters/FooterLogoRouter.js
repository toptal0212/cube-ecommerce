import React from "react";
import FooterLogo from "../../ui/FooterLogo";
import { Routes, Route } from "react-router-dom";

const FooterLogoRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<FooterLogo />} />
			<Route path="/shop">
				<Route index element={<FooterLogo />} />
				<Route path="product" element={<FooterLogo />} />
			</Route>
			<Route path="/orders" element={<FooterLogo />} />
			<Route path="/cart" element={<FooterLogo />} />
			<Route path="/success" element={<FooterLogo />} />
			<Route path="*" element={<></>} />
		</Routes>
	);
};

export default FooterLogoRouter;
