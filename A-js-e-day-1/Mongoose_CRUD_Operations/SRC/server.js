const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const PORT = 9000;
const url = "mongodb://localhost/users";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const userRouter = require("../src/routes/users");
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("server started");
});
