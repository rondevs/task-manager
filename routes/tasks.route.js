const express = require('express')
const {createTask, getAllTasks, updateTask, deleteTask, getTask} = require('../controllers/tasks.controller.js')

const taskRouter = express.Router()


taskRouter.route('/').get(getAllTasks).post(createTask)
taskRouter.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)


module.exports = taskRouter
