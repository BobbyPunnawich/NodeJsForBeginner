const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Express.js</h1>");
});

app.get("/product", (req, res) => {
  res.send("<h1>Hello Product</h1>");
});

app.listen(3002, () => {
  console.log("Start server at port 3002");
});
