const router = require("express").Router();

// Post Create

router.get("/create", (req, res) => {
  res.send("single Created Posts");
});

router.post("/create", (req, res) => {
  res.send("Create a single post");
});

//Post Edit

router.get("/edit/:postId", (req, res) => {
  res.send("Get a Single post for Edit");
});

router.post("/edit/:postId", (req, res) => {
  res.send("After edited complete set the database");
});

//Delete post

router.delete("/delete/:postId", (req, res) => {
  res.send("Data delete succefully form data base");
});

router.get("/", (req, res) => {
  res.send("Get All Database post for this app");
});

module.exports = router;
