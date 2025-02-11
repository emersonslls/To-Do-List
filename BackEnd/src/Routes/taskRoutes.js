const express = require("express");
const { createTask, getTasks, deleteTask } = require("../Controllers/taskController");
const authenticateJWT = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateJWT, createTask);
router.get("/", authenticateJWT, getTasks);
router.delete("/:id", authenticateJWT, deleteTask);

module.exports = router;
