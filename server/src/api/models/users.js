const pool = require("../../config/databaseConfig");

const getStripeCustomerId = async (userId) => {
	try {
		const stripeCustomerId = await pool.query(
			"SELECT stripe_customer_id FROM users WHERE id = $1",
			[userId]
		);
		return stripeCustomerId.rows[0].stripe_customer_id;
	} catch (error) {
		return console.log(error.message);
	}
};

const addStripeCustomer = async (userId, stripeCustomerId) => {
	try {
		const addStripeCustomerId = await pool.query(
			"UPDATE users SET stripe_customer_id = $2 WHERE id = $1 RETURNING *",
			[userId, stripeCustomerId]
		);

		return addStripeCustomerId.rows[0].stripe_customer_id;
	} catch (error) {
		return console.log(error.message);
	}
};

const getUserIdFromStripeId = async (stripeCustomerId) => {
	try {
		const userId = await pool.query(
			"SELECT * FROM users WHERE stripe_customer_id = $1",
			[stripeCustomerId]
		);

		return userId.rows[0].id;
	} catch (error) {
		return console.log(error.message);
	}
};

module.exports = {
	getStripeCustomerId,
	addStripeCustomer,
	getUserIdFromStripeId,
};
