const express = require("express");
const router = express.Router();
const auth = require("../Controllers/authController");

router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Only admins can acess this route");
  } else {
    res.status(401).send("Acess denied: Not admin");
  }
});

module.exports = router;
