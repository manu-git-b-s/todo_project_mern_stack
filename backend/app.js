const express = require("express");
const authRoutes = require("./routes/auth");
const listRoutes = require("./routes/list");
require("./conn/conn");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/", authRoutes);
app.use("/api/v2/", listRoutes);

app.listen(8080, () => {
  console.log(`Server started`);
});
