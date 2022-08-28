import React from "react";
import FormatPrice from "../../components/format/FormatPrice";
import ClipLoader from "react-spinners/ClipLoader";

const Checkout = (props) => {
	return (
		<>
			<div id="subtotal" className="flex gap-2">
				<h1 className="font-medium text-lg">Subtotal</h1>
				<FormatPrice price={props.subtotal} />
			</div>
			<div id="checkout">
				{props.checkoutLoading ? (
					<ClipLoader
						color="#00A7DC"
						size={50}
						loading={true}
						className="relative"
					/>
				) : (
					<button
						className="text-sm xsm:text-lg font-semibold w-fit py-2 px-4 bg-darkLightishBlue text-white rounded-full hover:bg-darkerLightishBlue"
						onClick={props.createCheckoutSession}
					>
						Proceed to checkout
					</button>
				)}
			</div>
		</>
	);
};

export default Checkout;
