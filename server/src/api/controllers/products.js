// Models
const {
	queryAllProducts,
	querySingleProduct,
	queryCategory,
	queryProductName,
} = require("../models/products");

const getProducts = async (req, res) => {
	try {
		const { productId, category, productName } = req.query;
		let products = [];

		// Get single product
		if (productId) {
			products = await querySingleProduct(Number(productId));
		} else {
			products = await queryAllProducts();
		}

		// Get category
		if (category) {
			products = await queryCategory(category);
		}

		if (productName) {
			products = await queryProductName(productName);
		}

		if (!products) {
			return res.status(200).json({
				success: false,
				msg: "We could not find the item you were looking for",
			});
		}

		return res.status(200).json({ success: true, data: products });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

module.exports = { getProducts };
