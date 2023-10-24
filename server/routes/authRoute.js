const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// routes to signin and register pages
router.route("/signin").post(authController.signin);
router.route("/register").post(authController.register);

// export router for both pages
module.exports = router;
