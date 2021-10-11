const { Router } = require("express");

const router = Router();

router.post("/profilePic", (req, res) => {
  res.send("successfully upload a profile Picture");
});

router.delete("/profilePic", (req, res) => {
  res.send("Delete  successfully your profile image");
});

router.post("/postImage", (req, res) => {
  res.send("success post image upload");
});

module.exports = router;
