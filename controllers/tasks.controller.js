const Task = require('../models/tasks.model')

const getAllTasks = async (req, res)=>{
  try{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  }catch(err){
    res.status(500).json({msg:err})
  }
}

const updateTask = (req, res)=>{
  res.send("update task")
}

const createTask = async (req, res)=>{
  try{
    const task = await Task.create(req.body)
    res.status(200).json({task})
  }catch(err){
    res.status(500).json({msg:err})
  }
}


const getTask = async (req, res)=>{
  try{
    const {id:taskID}= req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
  }catch(err){
    res.status(500).json({msg: err})
  }
}

const deleteTask = async (req, res)=>{
  try{
    await Task.deleteOne(req.body._id)
    res.status(200).json({msg: "task deleted"})

  }catch(err){
    res.status(500).json({msg: err})
  }
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask
}
