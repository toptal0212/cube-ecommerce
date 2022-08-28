require("dotenv").config({ path: "../.env" });
const pg = require("pg").Pool;

const pool = new pg({
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABSE_PORT,
	database: process.env.DATABASE_NAME,
});

module.exports = pool;
