const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

// Models
const { createUser } = require("../models/register");

// Validations
const {
	usernameExist,
	fieldsNotFilled,
	passwordsDoNotMatch,
	notEightCharacters,
	hasSpaces,
} = require("../validations/account");

// Create account
const createAccount = async (req, res) => {
	try {
		const { username, password, confirmPassword } = req.body;

		// Check if username and password fields is filled
		if (fieldsNotFilled(username, password)) {
			return res
				.status(200)
				.json({ success: false, msg: "Username or password field missing" });
		}

		// Check if username has been taken
		if (await usernameExist(username)) {
			return res
				.status(200)
				.json({ success: false, msg: "Username has been taken" });
		}

		// Check if username has spaces
		if (hasSpaces(username)) {
			return res
				.status(200)
				.json({ success: false, msg: "Username cannot contain spaces" });
		}

		// Check if confirm password field matches password field
		if (passwordsDoNotMatch(password, confirmPassword)) {
			return res
				.status(200)
				.json({ success: false, msg: "Passwords do not match" });
		}

		// Check if password contains at least 8 or more characters
		if (notEightCharacters(password)) {
			return res.status(200).json({
				success: false,
				msg: "Password must contain 8 or more characters",
			});
		}
		// Create user
		const hashedPassword = await bcrypt.hash(password, 10);
		await createUser(uuidv4(), username, hashedPassword);
		return res
			.status(201)
			.json({ success: true, createMsg: "Account has been created" });
	} catch (error) {
		return res.status(500).json({ success: false, msg: "Server error" });
	}
};

module.exports = { createAccount };
