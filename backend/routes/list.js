const {
  createTaskController,
  updateTaskController,
  deleteTaskController,
  getAllTasksController,
} = require("../controllers/list");

const router = require("express").Router();

// CREATE TASK
router.post("/add-task", createTaskController);

// UPDATE TASK
router.put("/update-task/:id", updateTaskController);

// DELETE TASK
router.delete("/delete-task/:id", deleteTaskController);

// GET TASKS
router.get("/get-tasks/:id", getAllTasksController);

module.exports = router;
