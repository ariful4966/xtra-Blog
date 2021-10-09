const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/test", () => {
    console.log('Database Connection is Successfully');
});

app.listen(port || process.env.PORT, () => {
  console.log(`Server is running on Port ${port || process.env.PORT}`);
});
