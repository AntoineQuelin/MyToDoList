const express = require('express');
const router = express.Router();

const taskController = require('./controllers/taskController');


router.get('/tasks', taskController.getAllTasks);
router.patch('/tasks/:id', taskController.updateTaskById);
router.post('/tasks', taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;