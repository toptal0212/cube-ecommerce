const pool = require("../../config/databaseConfig");

const getUserId = async (userId) => {
	try {
		const id = await pool.query("SELECT id FROM users WHERE id = $1", [
			userId,
		]);

		return id.rows[0];
	} catch (error) {
		return;
	}
};

module.exports = { getUserId };
