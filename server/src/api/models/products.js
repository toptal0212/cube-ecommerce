const pool = require("../../config/databaseConfig");

const queryAllProducts = async () => {
	const products = await pool.query("SELECT * FROM products");
	return products.rows;
};

const querySingleProduct = async (productId) => {
	const product = await pool.query("SELECT * FROM products WHERE id = $1", [
		productId,
	]);
	return product.rows[0];
};

const queryCategory = async (category) => {
	const products = await pool.query(
		"SELECT * FROM products WHERE category = $1",
		[category]
	);
	return products.rows;
};

const queryProductName = async (productName) => {
	const products = await pool.query(
		"SELECT * FROM products WHERE product_name LIKE $1",
		[`%${productName}%`]
	);

	return products.rows;
};

module.exports = {
	queryAllProducts,
	querySingleProduct,
	queryCategory,
	queryProductName
};
