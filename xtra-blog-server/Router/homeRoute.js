const router = require("express").Router();

router.get("/:postId", (req, res) => {
  res.send("Get a single post information");
});

router.get("/", (req, res) => {
  res.send("Get All Post data simply");
});

module.exports = router;
