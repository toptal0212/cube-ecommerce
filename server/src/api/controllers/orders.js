const { queryUserOrders, queryOrderProducts } = require("../models/orders");

const getUserOrders = async (req, res) => {
	try {
		const userId = req.user.userId;

		const orders = await queryUserOrders(userId);

		return res.status(200).json({ success: true, data: orders });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

const getOrderProducts = async (req, res) => {
	try {
		const { orderId } = req.body;
        
		const items = await queryOrderProducts(orderId);
		
		if (!items) {
			return res.status(400).json({ success: false });
		}

		return res.status(200).json({ success: true, data: items });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

module.exports = { getUserOrders, getOrderProducts };
