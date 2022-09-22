const Task = require('../models/task');

const taskController = {

  async getAllTasks(req, res) {
    try {
      const tasks = await Task.findAll({
        order: [
          ['position', 'ASC']
        ]
      });
      res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message })
    }
  },

  async updateTaskById(req, res) {
    try {
      const taskId = req.params.id;
      const task = await Task.findByPk(taskId);

      if (!task) {
        const error = new Error(`can't find task with id ${taskId}`);
        return res.status(404).json({ message: error.message });
      }

      const { name, position, color, finished } = req.body;

      if (name) {
        task.name = name;
      }

      if (position) {
        task.position = position;
      }

      if (color) {
        task.color = color;
      }

      if (finished) {
        task.finished = finished;
      }

      await task.save();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  async createTask(req, res) {
    try {
      const task = Task.build();
      const { name, position, color, finished } = req.body;

      if (!name) {
        const error = new Error(`property name is missing`);
        res.status(400).json({ message: error.message })
      }

      if (name) {
        task.name = name;
      }

      if (position) {
        task.position = position;
      }

      if (color) {
        task.color = color;
      }

      if (finished) {
        task.finished = finished;
      }

      await task.save();
      res.status(201).json(task);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteTaskById(req, res) {
    try {
      const taskId = req.params.id;
      const task = await Task.findByPk(taskId);

      if (!task) {
        const error = new Error(`can't find task with id ${taskId}`);
        res.status(404).json({ message: error.message })
      }

      await task.destroy();

      const remainingTasks = await Task.findAll();
      res.status(200).json(remainingTasks);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
} 

module.exports = taskController;