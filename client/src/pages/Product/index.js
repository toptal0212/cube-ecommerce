import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import authorize from "../../utils/authorize";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

import ClipLoader from "react-spinners/ClipLoader";
import ItemCountContext from "../../context/ItemCartContext";
import server_url from "../../config/server";

const Product = () => {
	const [product, setProduct] = useState({});
	const [qty, setQty] = useState(1);
	const [validToken, setTokenValid] = useState(false);
	const [success, setSuccess] = useState(false);
	const [waitForButton, setWaitForButton] = useState(false);
	const [loading, setLoading] = useState(true);
	const [searchParams] = useSearchParams({ productId: "1" });
	const id = searchParams.get("productId");

	const token = localStorage.getItem("token");

	const { getItemCount } = useContext(ItemCountContext);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(`${server_url}/api/products?productId=${id}`);
				const data = await res.json();

				setProduct(data.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				return console.log(error.message);
			}
		};
		const auth = async () => {
			if (await authorize(token)) {
				setTokenValid(true);
			}
		};
		auth();
		fetchProduct();
	}, [id, token]);

	const addQty = () => {
		setQty((prevQty) => (prevQty += 1));
	};

	const minusQty = () => {
		setQty((prevQty) => (prevQty <= 1 ? prevQty : (prevQty -= 1)));
	};

	const addToCart = async () => {
		try {
			if (validToken && !waitForButton) {
				setWaitForButton((prevValue) => !prevValue);

				const details = { productId: id, qty: qty };
				// Add to cart
				const res = await fetch(`${server_url}/api/carts`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(details),
				});
				const data = await res.json();
				if (data) {
					await getItemCount(token);
					setSuccess((prevValue) => !prevValue);
					setTimeout(() => {
						setWaitForButton((prevValue) => !prevValue);
						setSuccess((prevValue) => !prevValue);
					}, 1500);
				}
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			{!loading ? (
				<>
					{product ? (
						<>
							<div
								id="product-container"
								className="flex w-full justify-center my-8 gap-4 flex-col items-center md:items-stretch md:h-[40rem] md:flex-row"
							>
								<ProductImage image={product.image_url} />
								<div
									id="info"
									className="flex flex-col gap-4 w-64 xxsm:w-80 xsm:w-96 md:w-72 lg:w-96"
								>
									<ProductInfo
										company={product.company}
										name={product.product_name}
										price={product.price}
										qty={qty}
										minusQty={minusQty}
										addQty={addQty}
										validToken={validToken}
										addToCart={addToCart}
										id={id}
										success={success}
									/>
									<ProductDescription description={product.description} />
								</div>
							</div>
						</>
					) : (
						<h1 className="fixed text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
							No results
						</h1>
					)}
				</>
			) : (
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

export default Product;
