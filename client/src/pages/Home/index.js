import React, { useContext, useEffect } from "react";
import HomeHeroOne from "./HomeHeroOne";
import HomeHeroTwo from "./HomeHeroTwo";

import ItemCountContext from "../../context/ItemCartContext";

const Home = () => {
	const token = localStorage.getItem("token");

	const { getItemCount } = useContext(ItemCountContext);

	useEffect(() => {
		const setItemCount = async () => {
			await getItemCount(token);
		};
		setItemCount();
		// eslint-disable-next-line
	}, []);
	
	return (
		<>
			<HomeHeroOne />
			<HomeHeroTwo />
		</>
	);
};

export default Home;
