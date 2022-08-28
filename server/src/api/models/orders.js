const pool = require("../../config/databaseConfig");

const queryUserOrders = async (userId) => {
	try {
		const orders = await pool.query(
			"SELECT * FROM orders WHERE user_id = $1 ORDER BY index DESC",
			[userId]
		);

		return orders.rows;
	} catch (error) {
		return console.log(error.message);
	}
};

const queryOrderProducts = async (orderId) => {
	try {
		const items = await pool.query(
			"SELECT products.price, products.product_name, qty, products.id FROM order_products JOIN products ON products.id = order_products.product_id WHERE order_id = $1",
			[orderId]
		);
		return items.rows;
	} catch (error) {
		return console.log(error.message);
	}
};

const addToOrders = async (orderId, userId, totalPrice, numberOfItems) => {
	try {
		const order = await pool.query(
			"INSERT INTO orders(id, user_id, total_price, amount_of_items) VALUES($1, $2, $3, $4) RETURNING *",
			[orderId, userId, totalPrice, numberOfItems]
		);

		return order.rows;
	} catch (error) {
		console.log(error.message);
	}
};

const addToOrderProducts = async (orderId, productId, qty) => {
	try {
		const item = await pool.query(
			"INSERT INTO order_products(order_id, product_id, qty) VALUES($1, $2, $3) RETURNING *",
			[orderId, productId, qty]
		);

		return item.rows[0];
	} catch (error) {
		return console.log(error.message);
	}
};

module.exports = {
	addToOrders,
	addToOrderProducts,
	queryUserOrders,
	queryOrderProducts,
};
