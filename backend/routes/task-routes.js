const express = require("express");
const {
  getAllTasks,
  getTask,
  deleteTask,
  createTask,
  updateTask,
} = require("../controllers/task-controllers");
const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
