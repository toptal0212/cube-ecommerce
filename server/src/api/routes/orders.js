const express = require("express");

const { getUserOrders, getOrderProducts } = require("../controllers/orders");
const { authToken } = require("../middlewares/authToken");

const router = express.Router();

router.route("/").get(authToken, getUserOrders);
router.route("/products").post(getOrderProducts);

module.exports = router;
