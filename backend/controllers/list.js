const User = require("../models/user");
const List = require("../models/list");

const createTaskController = async (req, res) => {
  try {
    const { id, body, title } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      await existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const updateTaskController = async (req, res) => {
  try {
    const { body, title } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, { title, body });
    await list.save().then(() => res.status(200).json({ message: "Task Updated" }));
  } catch (error) {
    console.log(error);
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(id, { $pull: { list: req.params.id } });
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({ message: "Task deleted" }));
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllTasksController = async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "No Task" });
  }
};

exports.getAllTasksController = getAllTasksController;
exports.deleteTaskController = deleteTaskController;
exports.updateTaskController = updateTaskController;
exports.createTaskController = createTaskController;
