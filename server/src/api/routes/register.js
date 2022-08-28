const express = require("express");

// Controllers
const { createAccount } = require("../controllers/register");

const router = express.Router();

router.route("/").post(createAccount);

module.exports = router;
