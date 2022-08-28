require("dotenv").config();

// Models
const { queryUserCart, deleteAllItemsInUserCart } = require("../models/carts");
const {
	getStripeCustomerId,
	addStripeCustomer,
	getUserIdFromStripeId,
} = require("../models/users");

const centsFormatter = require("../helpers/centsFormatter");
const sumOfQuantities = require("../helpers/sumOfQuantities");
const totalPrice = require("../helpers/totalPrice");
const { addToOrders, addToOrderProducts } = require("../models/orders");

// Service
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
	try {
		const userId = req.user.userId;
		const username = req.user.username;

		const cart = await queryUserCart(userId);

		let stripeCustomerId = await getStripeCustomerId(userId);

		if (!stripeCustomerId) {
			const customer = await stripe.customers.create({
				name: username,
			});

			addStripeCustomer(userId, customer.id);

			stripeCustomerId = customer.id;
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			billing_address_collection: "auto",
			shipping_options: [
				{ shipping_rate: "shr_1La7MCAVpkOiV3p5tfcdUMQ2" },
				{ shipping_rate: "shr_1La7NCAVpkOiV3p5XNuoWGuq" },
			],
			line_items: cart.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.product_name,
							images: [item.image_url],
						},
						unit_amount: centsFormatter(item.price),
					},
					quantity: item.qty,
				};
			}),
			success_url: `${process.env.CLIENT_URL}/success`,
			cancel_url: `${process.env.CLIENT_URL}/cart`,
			customer: stripeCustomerId,
		});

		return res.status(200).json(session.url);
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ success: false, msg: error.message });
	}
};

const stripeWebhook = async (req, res) => {
	const endpointSecret = process.env.WEBHOOK_SECRET;

	const sig = req.headers["stripe-signature"];

	let event = req.body;

	try {
		event = await stripe.webhooks.constructEvent(
			req.rawBody,
			sig,
			endpointSecret.toString()
		);
	} catch (err) {
		console.log(err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	const paymentIntent = event.data.object;

	switch (event.type) {
		case "payment_intent.succeeded":
			const stripeCustomerId = paymentIntent.customer;

			const userId = await getUserIdFromStripeId(stripeCustomerId);

			const cart = await queryUserCart(userId);

			const order = {
				id: paymentIntent.id,
				userId: userId,
				totalPrice: totalPrice(cart),
				numberOfItems: sumOfQuantities(cart),
			};

			await addToOrders(
				order.id,
				order.userId,
				order.totalPrice,
				order.numberOfItems
			);

			cart.map(async (item) => {
				return await addToOrderProducts(order.id, item.id, item.qty);
			});

			await deleteAllItemsInUserCart(userId);
			break;
		case "payment_intent.failed":
			console.log("Intent failed");
			break;
	}

	return res.status(200).json({ success: true });
};

module.exports = { createCheckoutSession, stripeWebhook };
