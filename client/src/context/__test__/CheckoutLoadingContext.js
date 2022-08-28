import React, { createContext, useState } from "react";

const CheckoutLoadingContext = createContext();

export function CheckoutLoadingProvider({ children }) {
	const [checkoutLoading, setCheckoutLoading] = useState(false);

	const changeCheckoutLoading = () => {
		setCheckoutLoading((prevState) => !prevState);
	};

	return (
		<CheckoutLoadingContext.Provider
			value={(checkoutLoading, changeCheckoutLoading)}
		>
			{children}
		</CheckoutLoadingContext.Provider>
	);
}

export default CheckoutLoadingContext;
