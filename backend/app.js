const express = require("express");
const authRoutes = require("./routes/auth");
require("./conn/conn");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/", authRoutes);

app.listen(8080, () => {
  console.log(`Server started`);
});
