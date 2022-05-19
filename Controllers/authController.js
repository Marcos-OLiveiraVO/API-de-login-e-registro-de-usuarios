const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("authorization-token");
  if (!token) {
    return res.status(401).send("acess denied");
  }

  try {
    const userVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userVerified;
    next();
  } catch (err) {
    res.status(401).send(`acess denied`);
  }
};
