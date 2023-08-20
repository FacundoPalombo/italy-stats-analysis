const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ ping: "pong" });
});

module.exports = router;
