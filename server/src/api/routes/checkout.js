const express = require("express");

const {
	createCheckoutSession,
	stripeWebhook,
} = require("../controllers/checkout");
const { authToken } = require("../middlewares/authToken");

const router = express.Router();

router.route("/").post(authToken, createCheckoutSession);

router.route("/webhook").post(stripeWebhook);

module.exports = router;
