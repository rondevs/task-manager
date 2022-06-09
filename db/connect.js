const mongoose = require('mongoose')


const connectDB = async (uri)=>{
    await mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true})
}

module.exports = connectDB