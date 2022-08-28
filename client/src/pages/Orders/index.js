import React, { useEffect, useState } from "react";
import OrderElements from "./OrderElements";

import ClipLoader from "react-spinners/ClipLoader";
import server_url from "../../config/server";

const Orders = () => {
	const token = localStorage.getItem("token");

	const [loading, setLoading] = useState(true);

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		async function getOrders() {
			try {
				const res = await fetch(`${server_url}/api/orders`, {
					headers: { authorization: `Bearer ${token}` },
				});

				const data = await res.json();

				if (data.success) {
					setOrders(
						data.data.map((order) => {
							return { ...order, showProducts: false, items: [] };
						})
					);
				}
			} catch (error) {
				return console.log(error.message);
			} finally {
				setLoading(false);
			}
		}
		getOrders();
		// eslint-disable-next-line
	}, []);

	async function showItems(event, id) {
		let singleOrder = orders.filter((order) => id === order.id);
		singleOrder = singleOrder[0];

		if (singleOrder.items.length === 0) {
			const res = await fetch(`${server_url}/api/orders/products`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ orderId: id }),
			});

			const data = await res.json();

			const items = data.data;

			const newOrders = orders.map((order) => {
				return order.id === id
					? {
							...order,
							items: items,
							showProducts: !order.showProducts,
					  }
					: order;
			});
			setOrders(newOrders);
		} else {
			const newOrders = orders.map((order) => {
				return order.id === id
					? { ...order, showProducts: !order.showProducts }
					: order;
			});

			setOrders(newOrders);
		}
	}

	return (
		<>
			{orders.length && !loading ? (
				<div
					id="orders"
					className="flex relative left-1/2 translate-x-[-50%] flex-col w-fit items-center py-8 gap-4"
				>
					<OrderElements orders={orders} showItems={showItems} />
				</div>
			) : (
				<h1 className="fixed top-1/2 left-1/2 text-center translate-x-[-50%] translate-y-[-50%] text-4xl">
					{!loading && "No orders to show"}
				</h1>
			)}
			{/* Loading Screen */}
			{loading && (
				<div className="fixed flex w-full justify-center top-[38%]">
					<ClipLoader
						color="#00A7DC"
						size={150}
						loading={true}
						className="absolute"
					/>
				</div>
			)}
		</>
	);
};

export default Orders;
