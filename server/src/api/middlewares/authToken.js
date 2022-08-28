require("dotenv").config();
const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		return res
			.status(401)
			.json({ success: false });
	}

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
		if (error) return res.status(200).json({ success: false });

		req.user = user;
		next();
	});
};

module.exports = { authToken };
