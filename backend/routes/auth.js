const router = require("express").Router();
const { registerHandler, loginHandler } = require("../controllers/auth");

// SIGN UP
router.post("/register", registerHandler);

// LOGIN
router.post("/login", loginHandler);

module.exports = router;
