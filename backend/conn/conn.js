const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://bsmanupriyan:sTlyhmBege5zHTXF@cluster0.etgx3wi.mongodb.net/todo").then(() => {
      console.log("Connected");
    });
  } catch (error) {
    res.status(400).json({
      message: "Not connected",
    });
  }
};

conn();
