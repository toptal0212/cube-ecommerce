import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../ui/Navbar";

const NavbarRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}/>
			<Route path="/shop">
				<Route index element={<Navbar />}/>
				<Route path="product" element={<Navbar />}/>
			</Route>
			<Route path="/orders" element={<Navbar />}/>
			<Route path="/cart" element={<Navbar />}/>
			<Route path="/success" element={<Navbar />}/>
			<Route path="*" element={<></>}/>
		</Routes>
	);
};

export default NavbarRouter;
