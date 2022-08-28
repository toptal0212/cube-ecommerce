require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Require Routes
const registerRouter = require("./src/api/routes/register");
const loginRouter = require("./src/api/routes/login");
const authorizeRouter = require("./src/api/routes/authorize");
const productsRouter = require("./src/api/routes/products");
const cartsRouter = require("./src/api/routes/carts");
const checkoutRouter = require("./src/api/routes/checkout");
const ordersRouter = require("./src/api/routes/orders");

const port = process.env.PORT || 5000

// Global middleware
app.use(
	express.json({
		verify: (req, res, buf) => {
			req.rawBody = buf;
		},
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: true,
	})
);

app.get("/", (req, res) => {
	return res.status(200).json({ success: true });
});

// Register Route
app.use("/api/register", registerRouter);

// Login Route
app.use("/api/login", loginRouter);

// Authorize Route
app.use("/api/authorize", authorizeRouter);

// Products Route
app.use("/api/products", productsRouter);

// Carts Route
app.use("/api/carts", cartsRouter);

// Checkout Route
app.use("/api/checkout", checkoutRouter);

// Orders Route
app.use("/api/orders", ordersRouter);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
