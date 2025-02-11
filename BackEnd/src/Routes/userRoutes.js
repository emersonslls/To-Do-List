const express = require("express");
const { getUserProfile } = require("../Controllers/userController");
const authenticateJWT = require("../Middleware/authMiddleware");

const router = express.Router();

router.get("/profile", authenticateJWT, getUserProfile);

module.exports = router;
