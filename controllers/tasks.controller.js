
const Task = require("../models/tasks");

const task = new Task();

//
const getTasks = (req, res) => {
  try {
    const tasks = task.getTasks();
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const getTaskByID = (req, res) => {
  try {
    const id = req.params.id;
    const taskSearch = task.getTaskByID(id);
    if (!taskSearch) {
      res.send("Tarea no encontrada");
    }
    res.send(taskSearch);
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const createTask = (req, res) => {
  try {
    const newTask = req.body;
    task.createTask(newTask);
    res.send("Tarea creada");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const editTask = (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    task.editTask(id, newData);
    res.send("Tarea actualizada");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const deleteTask = (req, res) => {
  try {
    const id = req.params.id;
    task.deleteTask(id);
    res.send("Tarea eliminada o no existe");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};


module.exports = {
  getTasks,
  getTaskByID,
  createTask,
  editTask,
  deleteTask,
};