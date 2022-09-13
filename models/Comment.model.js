const mongoose = require('mongoose')
 const commentSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    tweet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweet"
    },
    content : String,
    like: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
 })
 const Comment = mongoose.model('Comment', commentSchema)
 module.exports = Comment