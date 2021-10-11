const router = require("express").Router();

router.get("/:userId", (req, res) => {
  res.send("Single author is Existing");
});

module.exports = router;
