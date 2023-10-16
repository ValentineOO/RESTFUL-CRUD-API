const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello node API");
});
app.get("/blog", (req, res) => {
  res.send("Hello baba yaga");
});

mongoose
  .connect(
    "mongodb+srv://admin:King5man!@val-api.rbqit3a.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API listening on port 3000`);
    });
  })
  .catch(() => {
    console.log(error);
  });
