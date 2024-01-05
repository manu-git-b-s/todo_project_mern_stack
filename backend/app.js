const express = require("express");
const app = express();

require("./conn/conn");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => {
  console.log(`Server started`);
});
