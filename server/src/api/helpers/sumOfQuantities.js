const sumOfQuantities = (cart) => {
	let qty = 0;

	cart.map((item) => {
		return (qty += item.qty);
	});

	return qty;
};

module.exports = sumOfQuantities;
