const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "../data/tasks.json");
const { v4: uuid4 } = require("uuid");

class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  save() {
    fs.writeFileSync(pathToFile, JSON.stringify(this.tasks));
  }

  getTasks() {
    try {
      const tasksBase = fs.readFileSync(pathToFile, "utf-8");
      return tasksBase ? JSON.parse(tasksBase) : [];
    } catch (error) {
      console.error("Error leyendo archivo tasks.json:", error);
      return [];
    }
  }

  getTaskByID(id) {
    const taskFind = this.tasks.find(task => task.id == id);
    return taskFind;
  }

  createTask(task) {
    const newTask = {
      id: uuid4(),
      ...task,
    };
    if (newTask.estado != "completada"){
      newTask.estado = "pendiente";
    }
    this.tasks.push(newTask);
    this.save();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id != id);
    this.save();
  }

  editTask(id, newData) {
    if (newData.estado != "completada"){
      newData.estado = "pendiente";
    }
    this.tasks = this.tasks.map((task) => {
      if (task.id == id) {
        return {
          id,
          ...task,
          ...newData,
        };
      }
      return task;
    });
    this.save();
  }
}


module.exports = Task;