import React from "react";
import { NavLink, Link } from "react-router-dom";
const MenuMobile = (props) => {
	return (
		<>
			<div
				id="black-screen"
				onClick={props.showMobileMenu}
				className={`fixed w-1/2 h-[100vh] bg-black top-0 opacity-5 z-50 transition-all duration-300 ease-in md:hidden ${
					props.showMenu ? "left-0" : "left-[-50%]"
				}`}
			></div>
			<div
				id="menu-mobile"
				className={`fixed w-1/2 top-0 h-[100vh] justify-start flex flex-col items-center bg-white z-40 shadow transition-all duration-300 ease-in md:hidden ${
					props.showMenu ? "right-0" : "right-[-50%]"
				}`}
			>
				<div className="h-[10%]"></div>
				<NavLink to="/" className="mobile-link">
					Home
				</NavLink>
				<NavLink to="/shop" className="mobile-link">
					Shop
				</NavLink>
				<NavLink to="/orders" className="mobile-link">
					Orders
				</NavLink>
				{props.isTokenValid ? (
					<Link to="/" className="mobile-link" onClick={props.signout}>
						Sign out
					</Link>
				) : (
					<NavLink to="/login" className="mobile-link">
						Sign in
					</NavLink>
				)}
			</div>
		</>
	);
};

export default MenuMobile;
