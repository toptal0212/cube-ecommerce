import React, { useEffect, useState, useContext } from "react";

import UserItems from "./UserItems";
import Checkout from "./Checkout";

import createCheckoutSession from "../../lib/createCheckoutSession";

import itemCountContext from "../../context/ItemCartContext";

import ClipLoader from "react-spinners/ClipLoader";
import server_url from "../../config/server";

const Cart = () => {
	const token = localStorage.getItem("token");

	// Reciept
	const [subtotal, setSubTotal] = useState(0);

	const [loading, setLoading] = useState(true);

	const [checkoutLoading, setCheckoutLoading] = useState(false);

	// Realtime cart
	const [cart, setCart] = useState([]);

	// Cart in database
	const [currentCart, setCurrentCart] = useState([]);

	// Context
	const { getItemCount } = useContext(itemCountContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`${server_url}/api/carts`, {
					method: "GET",
					headers: { authorization: `Bearer ${token}` },
				});

				const data = await res.json();

				if (data.success) {
					setCart(
						data.data.map((item) => {
							return { ...item, success: false, waitForUpdate: false };
						})
					);
					setCurrentCart(
						data.data.map((item) => {
							return { ...item, success: false, waitForUpdate: false };
						})
					);
					subTotal(data.data);
				}
			} catch (error) {
				return console.log(error.message);
			} finally {
				return setLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line
	}, []);

	const addQty = (event, id) => {
		setCart((prevCart) => {
			return prevCart.map((item) => {
				let currentQty = item.qty;
				return item.product_id === id
					? { ...item, qty: (currentQty += 1) }
					: item;
			});
		});
	};

	const minusQty = (event, id) => {
		setCart((prevCart) => {
			return prevCart.map((item) => {
				let currentQty = item.qty;

				if (item.product_id === id && currentQty > 1) {
					return { ...item, qty: (currentQty -= 1) };
				} else {
					return item;
				}
			});
		});
	};

	// Update cart button
	const updateCart = async (event, id) => {
		try {
			let cartItem = cart.filter((item) => item.product_id === id)[0];
			let currentCartItem = currentCart.filter(
				(item) => item.product_id === id
			)[0];

			if (!cartItem.waitForUpdate && cartItem.qty !== currentCartItem.qty) {
				setCart((prevCart) =>
					prevCart.map((item) => {
						return item.product_id === id
							? { ...item, waitForUpdate: true }
							: item;
					})
				);

				const details = { productId: cartItem.product_id, qty: cartItem.qty };

				const res = await fetch(`${server_url}/api/carts`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(details),
				});

				const data = await res.json();

				if (data.success === true) {
					setCart(
						cart.map((item) => {
							return item.product_id === id
								? { ...item, qty: details.qty }
								: item;
						})
					);
					// Show success message
					setCart((prevCart) =>
						prevCart.map((item) => {
							return item.product_id === id ? { ...item, success: true } : item;
						})
					);

					// Change subtotal
					subTotal(cart);

					// Wait then return to default values
					setTimeout(() => {
						setCart((prevCart) =>
							prevCart.map((item) => {
								return item.product_id === id
									? { ...item, success: false, waitForUpdate: false }
									: item;
							})
						);
						setCurrentCart(cart);
					}, 1000);
				}
			}
		} catch (error) {
			return console.log(error.message);
		}
	};

	// TODO Show error message if server fails
	const deleteitem = async (event, id) => {
		try {
			const details = { productId: id };

			const res = await fetch(`${server_url}/api/carts`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(details),
			});

			const data = await res.json();

			if (data.success === true) {
				getItemCount(token);

				// Remove deleted item from list
				setCart(cart.filter((item) => item.product_id !== id));

				// Change subtotal
				subTotal(cart.filter((item) => item.product_id !== id));

				setCurrentCart(cart);
			}
		} catch (error) {
			return console.log(error.message);
		}
	};

	function subTotal(cart) {
		let subtotal = 0;
		cart.map((item) => {
			return (subtotal += item.price * item.qty);
		});

		const usd = new Intl.NumberFormat("en-US");

		setSubTotal(usd.format(subtotal));
	}

	return (
		<>
			{cart.length && !loading ? (
				<>
					<div
						id="cart-container"
						className="flex flex-col-reverse md:flex-row py-8 gap-2 justify-center items-center md:items-stretch"
					>
						<div id="item-cards" className="flex flex-col gap-2 items-center">
							<UserItems
								cart={cart}
								minusQty={minusQty}
								addQty={addQty}
								updateCart={updateCart}
								deleteitem={deleteitem}
							/>
						</div>
						<div
							id="receipt"
							className="border-4 h-32 w-[14rem] xsm:w-[28rem] md:w-80 border-lightGray bg-white rounded-md justify-center items-center p-4 gap-2 flex flex-col sticky top-4"
						>
							<Checkout
								subtotal={subtotal}
								createCheckoutSession={(event) => {
									setCheckoutLoading(true);
									createCheckoutSession(event, token);
								}}
								checkoutLoading={checkoutLoading}
							/>
						</div>
					</div>
				</>
			) : (
				<h1 className="absolute flex w-full justify-center text-center top-[45%] text-4xl">
					{!loading && "No items currently in cart"}
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

export default Cart;
