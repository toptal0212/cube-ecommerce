const totalPrice = (cart) => {
	let price = 0;

	cart.map((item) => {
		return (price += item.qty * item.price);
	});

	return price;
};

module.exports = totalPrice;
