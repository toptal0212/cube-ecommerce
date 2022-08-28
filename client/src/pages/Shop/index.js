import React, { useEffect, useState, Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Filters from "./Filters";

import ClipLoader from "react-spinners/ClipLoader";
import server_url from "../../config/server";

const ProductCards = lazy(() => import("./ProductCards"));

const Shop = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		category: "",
		productName: "",
	});
	const [allProducts, setAllProducts] = useState();
	const [products, setProducts] = useState([{ id: 1 }]);

	const category = searchParams.get("category");
	const productName = searchParams.get("productName");

	useEffect(() => {
		const effect = async () => {
			await fetchAllProducts(category, productName);
		};
		effect();
		// eslint-disable-next-line
	}, []);

	const fetchAllProducts = async (categoryName) => {
		const res = await fetch(`${server_url}/api/products`);
		const data = await res.json();

		setAllProducts(data.data);

		if (categoryName) {
			setProducts(
				data.data.filter((product) => {
					return product.category === categoryName;
				})
			);
		} else if (productName) {
			setProducts(
				data.data.filter((product) => {
					return product.product_name
						.toUpperCase()
						.includes(productName.toUpperCase());
				})
			);
		} else {
			setProducts(data.data);
		}
	};

	function categorizedProducts(event, categoryName) {
		event.preventDefault();

		// Update search params
		if (categoryName) {
			setSearchParams({ category: categoryName });
		} else {
			searchParams.delete("category");
			searchParams.delete("productName");
			setSearchParams(searchParams);
		}

		let categorized = allProducts;
		if (allProducts && categoryName) {
			categorized =
				allProducts &&
				allProducts.filter((product) => {
					return product.category === categoryName;
				});
		}
		setProducts(categorized);
	}

	return (
		<>
			<Filters categorizedProducts={categorizedProducts} />
			{products.length ? (
				<>
					<div id="product-cards-container" className="flex justify-center">
						<div
							id="product-cards"
							className="flex flex-col gap-8 justify-items-center grid-cols-2 my-8 xl:grid-cols-4 lg:grid-cols-3 md:grid"
						>
							<Suspense
								fallback={
									<div className="fixed flex w-full justify-center top-[38%] right-0">
										<ClipLoader
											color="#00A7DC"
											size={150}
											loading={true}
											className="absolute"
										/>
									</div>
								}
							>
								<ProductCards products={products} />
							</Suspense>
						</div>
					</div>
				</>
			) : (
				<h1 className="fixed text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl">
					No results
				</h1>
			)}
		</>
	);
};

export default Shop;
