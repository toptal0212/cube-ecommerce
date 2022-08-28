const pool = require("../../config/databaseConfig");

const getUser = async (username) => {
	const user = await pool.query(
		"SELECT * FROM users WHERE UPPER(username) = $1",
		[username.toUpperCase()]
	);
	return user.rows[0];
};

module.exports = { getUser };
