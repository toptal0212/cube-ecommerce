require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validatePassword = async (password, hashedPassword) => {
	return await bcrypt.compare(password, hashedPassword);
};

const createToken = (username, userId) => {
	return jwt.sign({ username, userId }, process.env.ACCESS_TOKEN_SECRET);
};

module.exports = { validatePassword, createToken };
