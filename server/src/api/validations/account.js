const { getUsername } = require("../models/register");

const usernameExist = async (username) => {
	const user = { username: await getUsername(username) };
	const name = user.username.rows[0];

	if (name) {
		return true;
	} else {
		return false;
	}
};

const fieldsNotFilled = (username, password) => {
	if (!username || !password) {
		return true;
	} else {
		return false;
	}
};

const passwordsDoNotMatch = (password, confirmPassword) => {
	if (password !== confirmPassword) {
		return true;
	} else {
		return false;
	}
};

const notEightCharacters = (password) => {
	if (password.length < 8) {
		return true;
	} else {
		return false;
	}
};

const hasSpaces = (username) => {
	if (username.includes(" ")) {
		return true;
	} else {
		return false;
	}
};

module.exports = {
	usernameExist,
	fieldsNotFilled,
	passwordsDoNotMatch,
	notEightCharacters,
	hasSpaces,
};
