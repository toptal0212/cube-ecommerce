import React from "react";
import FormatPrice from "../../components/format/FormatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = (props) => {
	const company = props.company;
	const name = props.name;
	const price = props.price;

	return (
		<div
			id="info-container"
			className="rounded-md border-4 p-4 border-lightGray flex flex-col justify-center items-center gap-1 md:h-1/2"
		>
			<h2 className="underline">{company}</h2>
			<h1 className="text-xl font-semibold text-center">{name}</h1>
			<FormatPrice price={price} />
			<div id="qty" className="flex gap-4 py-2 justify-center items-center">
				<button id="minus" className="qty-btn" onClick={props.minusQty}>
					-
				</button>
				<h1 className="text-2xl font-medium">{props.qty}</h1>
				<button id="add" className="qty-btn" onClick={props.addQty}>
					+
				</button>
			</div>
			<button
				className="bg-darkLightishBlue text-white text-lg w-full font-semibold py-2 px-4 rounded-full hover:bg-darkerLightishBlue"
				onClick={props.addToCart}
			>
				Add to cart
			</button>
			{!props.validToken && (
				<p className="text-redError text-center">
					Must sign in before adding to cart
				</p>
			)}
			<div
				id="success-box"
				className={`fixed ${
					props.success ? "top-[7.5%]" : "-top-1/2"
				} transition-all duration-300 ease-in-out bg-white left-1/2 translate-x-[-50%] translate-y-[-50%] py-2 px-4 flex items-center justify-center gap-2 shadow-md z-50 rounded-md`}
			>
				<FontAwesomeIcon icon={faCircleCheck} color="green" />
				<h1 className="text-lg text-center">Item added to cart</h1>
			</div>
		</div>
	);
};

export default ProductInfo;
