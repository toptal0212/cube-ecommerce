const {
	queryUserCart,
	insertToCart,
	deleteIteminCart,
	queryUserItemCart,
	updateUserCart,
} = require("../models/carts");

const getUserCart = async (req, res) => {
	try {
		const userId = req.user.userId;

		const items = await queryUserCart(userId);

		if (!items) {
			return res.status(400).json({ success: false });
		}

		return res.status(200).json({ success: true, data: items });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

const addToCart = async (req, res) => {
	try {
		const { productId, qty } = req.body;

		const userId = req.user.userId;

		let item = await queryUserItemCart(userId, productId);

		if (!item) {
			item = await insertToCart(userId, productId, qty);
		} else {
			const lastQty = item.qty;
			item = await updateUserCart(userId, productId, qty + lastQty);
		}

		if (!item) {
			return res.status(401).json({ success: false });
		}

		return res.status(201).json({ success: true, data: item });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

const deleteItem = async (req, res) => {
	try {
		const { productId } = req.body;

		const userId = req.user.userId;

		const item = await deleteIteminCart(userId, productId);

		if (item.length === 0) {
			return res.status(401).json({ success: false, msg: "No item to delete" });
		}

		return res.status(201).json({ success: true, data: item });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

const updateCart = async (req, res) => {
	const { productId, qty } = req.body;

	const userId = req.user.userId;

	const item = await updateUserCart(userId, productId, qty);

	if (!item) {
		return res.status(401).json({ success: false });
	}

	return res.status(201).json({ success: true, data: item });
};

module.exports = { getUserCart, addToCart, deleteItem, updateCart };
