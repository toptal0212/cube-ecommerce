import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../components/format/FormatPrice";

const ProductCards = (props) => {
	const productCards = props.products ? (
		props.products.map((product) => {
			return (
				<div
					id="product-card"
					key={product.id}
					className="relative overflow-hidden flex flex-col items-center text-center border-2 h-auto w-60 border-lightishGray rounded-md md:flex-col md:h-auto md:w-64 sm:w-[32rem] xsm:w-[28rem] xsm:flex-row xxsm:w-[16rem]"
				>
					<div className="relative flex justify-center items-center object-cover h-64 w-64 overflow-hidden border-b-2 border-lightishGray">
						<Link to={`/shop/product?productId=${product.id}`}>
							<img
								src={product.image_url}
								alt="product"
								className="hover:saturate-50 transition-all ease-in-out duration-150"
							/>
						</Link>
					</div>
					<div className="flex flex-col relative w-1/2 items-center py-2 justify-center md:h-40 md:w-auto xxsm:py-0">
						<Link
							to={`/shop/product?productId=${product.id}`}
							className="font-semibold text-xl w-3/4"
						>
							{product.company}
						</Link>
						<Link
							to={`/shop/product?productId=${product.id}`}
							className="hover:underline hover:text-darkLightishBlue w-3/4 md:w-auto"
						>
							{product.product_name}
						</Link>
						<FormatPrice price={product.price} />
					</div>
				</div>
			);
		})
	) : (
		<div key={props.product.id}></div>
	);
	return <>{productCards}</>;
};

export default ProductCards;
