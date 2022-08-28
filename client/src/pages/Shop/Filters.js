import React from "react";
import { Link } from "react-router-dom";

const Filters = (props) => {
	return (
		<div
			id="category-filter"
			className="relative w-full flex-col flex gap-2 justify-center py-4 bg-whiteGray items-center xxsm:flex-row"
		>
			<h1 className="flex text-xl font-medium">Category</h1>
			<Link
				to={`/shop`}
				className="hover:underline filter-links"
				onClick={(event) => props.categorizedProducts(event, "")}
			>
				Any
			</Link>
			<Link
				to={`/shop?category=shirt`}
				className="hover:underline filter-links"
				onClick={(event) => props.categorizedProducts(event, "shirt")}
			>
				Shirt
			</Link>
			<Link
				to={`/shop?category=pants`}
				className="hover:underline filter-links"
				onClick={(event) => props.categorizedProducts(event, "pants")}
			>
				Pants
			</Link>
			<Link
				to={`/shop?category=sweater`}
				className="hover:underline filter-links"
				onClick={(event) => props.categorizedProducts(event, "sweater")}
			>
				Sweater
			</Link>
		</div>
	);
};

export default Filters;
