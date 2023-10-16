const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello node API");
});

app.listen(3000, () => {
  console.log(`Node API listening on port 3000`);
}
)