// Validations
const { fieldsNotFilled } = require("../validations/account");

// Services
const { validatePassword, createToken } = require("../services/account");

// Models
const { getUser } = require("../models/login");

const login = async (req, res) => {
	const { username, password } = req.body;

	// Check if username or password field is filled
	if (fieldsNotFilled(username, password)) {
		return res
			.status(200)
			.json({ success: false, msg: "Username or password field not filled" });
	}

	// Get user info
	const user = await getUser(username);

	// Store hashed password in variable if available
	const hashedPassword = user ? user.password : "";

	// Validate password
	const passwordCorrect = await validatePassword(password, hashedPassword);

	// Check if user with username exist
	if (!user || !passwordCorrect) {
		return res
			.status(401)
			.json({ success: false, msg: "Incorrect username or password" });
	}

	// Create a JSON Web Token for user
	const token = createToken(user.username, user.id);

	return res.status(200).json({ success: true, token: token });
};

module.exports = { login };
