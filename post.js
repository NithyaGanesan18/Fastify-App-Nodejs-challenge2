const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required: true
    },
    StudentID: {
        type: String,
        required: true
    },
    Subject1: 
    {
        type: Number,
        required: true
    },
      Subject2:
      {
          type: Number,
          required: true
      },
    Subject3:{
        type: Number,
        required:true
    },
    Subject4:
    {
        type: Number,
        required: true
    },
    Subject5:
    {
        type: Number,
        required: true
    }
},
    {
    timestamps: true
})
module.exports = mongoose.model('POST', postSchema)