const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require('./Router/authRoute')
const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', authRoute)

mongoose.connect("mongodb://localhost:27017/xtraBlog", () => {
  console.log("Database Connection is Successfully");
});

app.get("/", (req, res) => {
  res.send("Server is Running && Welcome to the port " + port);
});

app.listen(port || process.env.PORT, () => {
  console.log(`Server is running on Port ${port || process.env.PORT}`);
});
