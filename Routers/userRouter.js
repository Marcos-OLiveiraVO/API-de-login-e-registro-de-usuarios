const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.use(express.json());

router.get("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
