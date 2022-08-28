const pool = require("../../config/databaseConfig");

const getUsername = async (username) => {
	const user = await pool.query(
		"SELECT username FROM users WHERE UPPER(username) = $1",
		[username.toUpperCase()]
	);

	return user;
};

const createUser = async (id, username, hashedPassword) => {
	// Create user
	await pool.query(
		"INSERT INTO users(id, username, password) VALUES($1, $2, $3)",
		[id, username, hashedPassword]
	);
};
module.exports = { getUsername, createUser };
