import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuDesktop = (props) => {
	return (
		<div id="menu" className="px-4 gap-2 hidden items-center md:flex">
			<NavLink to="/" className="hover-link">
				Home
			</NavLink>
			<NavLink to="/shop" className="hover-link">
				Shop
			</NavLink>
			<NavLink to="/orders" className="hover-link">
				Orders
			</NavLink>
			{props.isTokenValid ? (
				<Link to="/" className="hover-link" onClick={props.signout}>
					Sign out
				</Link>
			) : (
				<NavLink to="/login" className="hover-link">
					Sign in
				</NavLink>
			)}
			<NavLink to="/cart" className="relative">
				<FontAwesomeIcon
					size="lg"
					icon={props.faCube}
					className="icon-hover"
				></FontAwesomeIcon>
				{props.itemsInCartCount !== 0 && (
					<div className="flex justify-center items-center absolute w-4 h-4 bg-redError rounded-full text-xs text-center text-white font-medium top-0 right-0">
						<h1>{props.itemsInCartCount}</h1>
					</div>
				)}
			</NavLink>
		</div>
	);
};

export default MenuDesktop;
