function filterUserCart(cart) {
	
	if (!cart) {
		return [];
	}

	// Grab unique product id
	const uniqueId = [];

	// Create unique list
	let newList = cart.map((item) => {
		if (!uniqueId.some((id) => id === item.product_id)) {
			uniqueId.push(item.product_id);
			return item;
		} else {
			return null;
		}
	});

	// Filter for only valid items
	newList = newList.filter((item) => item);

	// Set qty to 0
	newList = newList.map((item) => {
		return { ...item, qty: 0 };
	});

	cart.map((item) => {
		const index = newList.findIndex(
			(list) => list.product_id === item.product_id
		);

		return (newList[index].qty += item.qty);
	});

	return newList;
}

export default filterUserCart;
