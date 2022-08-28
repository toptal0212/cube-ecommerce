import { useState, createContext, useEffect } from "react";
import server_url from "../config/server";

const ItemCountContext = createContext();

export function ItemCountProvider({ children }) {
	const [itemCountInCart, setItemsInCartCount] = useState(0);
	const token = localStorage.getItem("token");

	useEffect(() => {
		async function runAsync() {
			await getItemCount(token);
		}
		runAsync();
	}, [token]);

	async function getItemCount(token) {
		const res = await fetch(`${server_url}/api/carts`, {
			headers: { authorization: `Bearer ${token}` },
		});
		const data = await res.json();

		if (data.success) {
			setItemsInCartCount(data.data.length);
		}
	}

	function setItemCountToZero() {
		setItemsInCartCount(0);
	}

	return (
		<ItemCountContext.Provider
			value={{ itemCountInCart, getItemCount, setItemCountToZero }}
		>
			{children}
		</ItemCountContext.Provider>
	);
}

export default ItemCountContext;
