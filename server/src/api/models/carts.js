const pool = require("../../config/databaseConfig");

const queryUserCart = async (user_id) => {
	try {
		const cart = await pool.query(
			"SELECT * FROM products JOIN carts ON products.id = carts.product_id WHERE user_id = $1 ORDER BY index ASC",
			[user_id]
		);
		return cart.rows;
	} catch (error) {
		return console.log(error.message);
	}
};

const queryUserItemCart = async (user_id, product_id) => {
	try {
		const item = await pool.query(
			"SELECT * FROM carts WHERE user_id = $1 AND product_id = $2",
			[user_id, product_id]
		);
		return item.rows[0];
	} catch (error) {
		return console.log(error.message);
	}
};

const updateUserCart = async (user_id, product_id, qty) => {
	try {
		const cart = await pool.query(
			"UPDATE carts SET qty = $3 WHERE user_id = $1 AND product_id = $2 RETURNING *",
			[user_id, product_id, qty]
		);
		return cart.rows[0];
	} catch (error) {
		return console.log(error.message);
	}
};

const insertToCart = async (user_id, product_id, qty) => {
	try {
		const item = await pool.query(
			"INSERT INTO carts(user_id, product_id, qty) VALUES($1, $2, $3) RETURNING *",
			[user_id, product_id, qty]
		);
		return item.rows[0];
	} catch (error) {
		return console.log(error.message);
	}
};

const deleteIteminCart = async (userId, productId) => {
	try {
		const item = await pool.query(
			"DELETE FROM carts WHERE user_id = $1 AND product_id = $2 RETURNING *",
			[userId, productId]
		);

		return item.rows;
	} catch (error) {
		return console.log(error.message);
	}
};

const deleteAllItemsInUserCart = async (userId) => {
	try {
		const cart = await pool.query(
			"DELETE FROM carts WHERE user_id = $1 RETURNING *",
			[userId]
		);

		return cart.rows;
	} catch (error) {
		return console.log(error.message);
	}
};

module.exports = {
	insertToCart,
	queryUserCart,
	deleteIteminCart,
	queryUserItemCart,
	updateUserCart,
	deleteAllItemsInUserCart,
};
