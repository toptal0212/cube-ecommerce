const express = require("express");

const router = express.Router();

// Middleware
const { authToken } = require("../middlewares/authToken");

// Controllers
const { authorizeToken } = require("../controllers/authorize");

router.route("/token").get(authToken, authorizeToken);

module.exports = router;
