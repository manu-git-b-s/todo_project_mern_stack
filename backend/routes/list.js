const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// CREATE TASK
router.post("/add-task", async (req, res) => {
  try {
    const { email, body, title } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      await existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// UPDATE TASK
router.put("/update-task/:id", async (req, res) => {
  try {
    const { email, body, title } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      await list.save().then(() => res.status(200).json({ message: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

// DELETE TASK
router.delete("/delete-task/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate({ email }, { $pull: { list: req.params.id } });
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({ message: "Task deleted" }));
    }
  } catch (error) {
    console.log(error);
  }
});

// GET TASKS
router.get("/get-tasks/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "No Task" });
  }
});

module.exports = router;
