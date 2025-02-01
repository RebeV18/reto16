const express = require("express");

const {
  getTasks,
  createTask,
  getTaskByID,
  editTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const tasksRouter = express.Router();

tasksRouter.get("/", getTasks);
tasksRouter.post("/", createTask);
tasksRouter.get("/:id", getTaskByID);
tasksRouter.put("/:id", editTask);
tasksRouter.delete("/:id", deleteTask);


module.exports = tasksRouter;