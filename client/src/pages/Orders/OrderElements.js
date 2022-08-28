import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

const OrderElements = (props) => {
	const orderElements = props.orders.map((order) => {
		const orderProducts = order.items.length ? (
			order.items.map((item) => {
				return (
					<div
						key={nanoid()}
						className={`flex flex-col items-center transition-all`}
					>
						<h1 className="font-medium">{item.product_name}</h1>
						<h1 className="font-normal">
							{item.qty} x ${item.price}
						</h1>
					</div>
				);
			})
		) : (
			<></>
		);

		return (
			<div
				id="order"
				key={order.id}
				className="flex flex-col relative overflow-hidden"
			>
				<div
					id="order-section-one"
					className="flex gap-2 lg:gap-8 w-64 xxsm:w-80 lg:w-[56rem] bg-lightGray py-4 px-8 rounded-md items-center justify-center flex-col lg:flex-row"
				>
					<div
						id="order-id"
						className="flex flex-col justify-center items-center gap-1"
					>
						<h1 className="xxsm:text-xl font-medium">Order ID</h1>
						<h1 className="text-xs xxsm:text-base w-72 text-center">
							{order.id}
						</h1>
					</div>
					<div
						id="order-id"
						className="flex flex-col justify-center items-center gap-1"
					>
						<h1 className="xxsm:text-xl font-medium">Created</h1>
						<h1 className="text-xs xxsm:text-base">
							{order.created_date.split("T")[0]}
						</h1>
					</div>
					<div
						id="order-id"
						className="flex flex-col justify-center items-center gap-1"
					>
						<h1 className="xxsm:text-xl font-medium">Number of Items</h1>
						<h1 className="text-xs xxsm:text-base">{order.amount_of_items}</h1>
					</div>
					<div
						id="order-total-price"
						className="flex flex-col justify-center items-center gap-1"
					>
						<h1 className="xxsm:text-xl font-medium">Total Price</h1>
						<h1 className="text-xs xxsm:text-base">${order.total_price}</h1>
					</div>
					<FontAwesomeIcon
						icon={faArrowDown}
						size="lg"
						color="black"
						className="cursor-pointer hover:bg-darkLightishGray rounded-md py-2 px-2"
						onClick={(event) => props.showItems(event, order.id)}
					/>
				</div>
				<div
					className={`flex flex-col bg-lightGray relative -z-10 gap-2 justify-center items-center rounded-md transition-all duration-500 ease-in-out ${
						order.showProducts
							? `-top-2 py-4 max-h-[400rem]`
							: "top-[-100%] max-h-0"
					}`}
				>
					{orderProducts}
				</div>
			</div>
		);
	});
	return <>{orderElements}</>;
};

export default OrderElements;
