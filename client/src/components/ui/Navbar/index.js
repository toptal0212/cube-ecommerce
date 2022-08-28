import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

// Components
import MenuMobile from "./MenuMobile";
import MenuBars from "./MenuBars";
import MenuDesktop from "./MenuDesktop";
import CubeLogoNav from "./CubeLogoNav";

// Utils
import authorize from "../../../utils/authorize";
import SearchBar from "./SearchBar";
import ItemCountContext from "../../../context/ItemCartContext";

const Navbar = () => {
	const [searchValue, setSearchValue] = useState("");
	const [showMenu, setShowMenu] = useState(false);

	const { itemCountInCart } = useContext(ItemCountContext);
	const { getItemCount } = useContext(ItemCountContext);
	const { setItemCountToZero } = useContext(ItemCountContext);

	const token = localStorage.getItem("token");
	const [isTokenValid, setIsTokenValid] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		// Authorize token
		const authToken = async (token) => {
			if (await authorize(token)) {
				setIsTokenValid(true);
				getItemCount();
			}
		};
		authToken(token);
		// eslint-disable-next-line
	}, []);

	const search = (event) => {
		event.preventDefault();

		// Query for product name
		navigate(`/shop?productName=${searchValue}`);

		window.location.reload();
	};

	// Mobile menu toggle
	const showMobileMenu = () => {
		setShowMenu((prevValue) => {
			return !prevValue;
		});
	};

	const signout = () => {
		// Set cart item count to zero
		setItemCountToZero();

		localStorage.clear();

		setIsTokenValid(false);
	};

	return (
		<nav>
			<div
				id="nav"
				className="flex items-center py-4 px-4 justify-center lg:px-0 md:justify-center sm:justify-start "
			>
				<CubeLogoNav />
				<SearchBar
					search={search}
					searchValue={searchValue}
					changeSearchValue={(event) => setSearchValue(event.target.value)}
				/>
				{/* Desktop Nav */}
				<MenuDesktop
					itemsInCartCount={itemCountInCart}
					faCube={faCube}
					isTokenValid={isTokenValid}
					signout={signout}
				/>
				{/* Mobile Nav */}
				<div className="flex justify-end items-center w-1/2 z-50 gap-2 md:hidden">
					<NavLink
						to="/cart"
						className="block fixed md:hidden z-0 mt-[2px] right-11 xsm:right-14 sm:right-12"
					>
						<FontAwesomeIcon
							size="lg"
							className="icon-hover z-50"
							icon={faCube}
						></FontAwesomeIcon>
						{itemCountInCart !== 0 && (
							<div className="flex justify-center items-center absolute w-4 h-4 bg-redError rounded-full text-xs text-center text-white font-medium top-0 right-0">
								<h1>{itemCountInCart}</h1>
							</div>
						)}
					</NavLink>
					<MenuBars showMenu={showMenu} showMobileMenu={showMobileMenu} />
				</div>
				<MenuMobile
					showMenu={showMenu}
					showMobileMenu={showMobileMenu}
					isTokenValid={isTokenValid}
					signout={signout}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
