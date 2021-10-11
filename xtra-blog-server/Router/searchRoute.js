const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("search the database data");
});

module.exports = router;
