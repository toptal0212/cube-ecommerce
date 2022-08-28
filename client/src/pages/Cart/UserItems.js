import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../components/format/FormatPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const UserItems = (props) => {
	const items = props.cart.map((item) => {
		return (
			<div
				key={item.product_id}
				id="item-card-container"
				className="relative flex flex-col border-4 border-lightGray rounded-md xsm:flex-row xsm:w-[28rem] xsm:h-64 w-[14rem] h-[28rem]"
			>
				<div
					id="image-container"
					className="relative object-contain overflow-hidden xsm:w-1/2 flex items-center justify-center"
				>
					<Link to={`/shop/product?productId=${item.product_id}`}>
						<img
							src={item.image_url}
							alt="product"
							className="hover:saturate-50 transition-all ease-in-out duration-150"
						/>
					</Link>
				</div>
				<div
					id="item-info"
					className="xsm:w-1/2 flex items-center justify-center flex-col p-4"
				>
					<p className="underline text-center">{item.company}</p>
					<h1 className="font-medium text-center text-lg">
						{item.product_name}
					</h1>
					<FormatPrice price={item.price} />
					<div id="qty" className="flex gap-4 py-2 justify-center items-center">
						<button
							id="minus"
							className="qty-btn"
							onClick={(event) => props.minusQty(event, item.product_id)}
						>
							-
						</button>
						<h1 className="text-2xl font-medium">{item.qty}</h1>
						<button
							id="add"
							className="qty-btn"
							onClick={(event) => props.addQty(event, item.product_id)}
						>
							+
						</button>
					</div>
					<div id="item-options" className="flex gap-4">
						<button
							className="hover-link text-darkLightishBlue"
							onClick={(event) => props.updateCart(event, item.product_id)}
						>
							Update
						</button>
						<button
							className="hover-link text-darkLightishBlue"
							onClick={(event) => props.deleteitem(event, item.product_id)}
						>
							Delete
						</button>
					</div>
					<div
						id="success-box"
						className={`fixed ${
							item.success ? "top-[7.5%]" : "-top-1/2"
						} transition-all duration-300 ease-in-out bg-white left-1/2 translate-x-[-50%] translate-y-[-50%] py-2 px-4 flex items-center justify-center gap-2 shadow-md z-50 rounded-md`}
					>
						<FontAwesomeIcon icon={faCircleCheck} color="green" />
						<h1 className="text-lg text-center">Updated item</h1>
					</div>
				</div>
			</div>
		);
	});

	return <>{items}</>;
};

export default UserItems;
