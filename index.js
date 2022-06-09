require('dotenv').config()
//import section
const express = require('express');
const mongoose  = require('mongoose');
const connectDB = require('./db/connect')

const taskRouter = require('./routes/tasks.route.js')

// variable declation section
const app = express()
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json())
app.use('/api/v1/tasks', taskRouter)


app.route('/').get((req, res)=>{
  res.send(`<h1>Task Manager</h1>`)
})


try{
  connectDB(process.env.MONGODB_URI)
  app.listen(PORT, HOST, ()=>{
    console.log(`Server listening at ${HOST}:${PORT} & Database connected`)
  })
}catch(err){
  console.log(err)
}
