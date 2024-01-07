const express = require("express");
const authRoutes = require("./routes/auth");
const listRoutes = require("./routes/list");
const cors = require("cors");
require("./conn/conn");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/", authRoutes);
app.use("/api/v2/", listRoutes);

app.listen(8080, () => {
  console.log(`Server started`);
});
