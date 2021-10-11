const router = require("express").Router();

//Sign up Route
router.get("/signup", (req, res) => {
  res.send(`<h1>Sign up page is comming soon.</h1>`);
});

router.post("/signup", (req, res) => {
  res.send(`<h1>Sign up page is comming soon.</h1>`);
});

//Login Route
router.get("/login", (req, res) => {
  res.send(`<h1>Sign up page is comming soon.</h1>`);
});

router.get("/login", (req, res) => {
  res.send(`<h1>Sign up page is comming soon.</h1>`);
});

//Logout Router

router.get("/logout", (req, res) => {
    res.send('<h2>Logout Successfully</h2>')
});
module.exports = router;
