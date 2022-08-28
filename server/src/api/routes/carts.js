const express = require("express");
const {
	getUserCart,
	addToCart,
	deleteItem,
	updateCart,
} = require("../controllers/carts");
const { authToken } = require("../middlewares/authToken");

const router = express.Router();

router
	.route("/")
	.get(authToken, getUserCart)
	.post(authToken, addToCart)
	.delete(authToken, deleteItem)
	.put(authToken, updateCart);

module.exports = router;
