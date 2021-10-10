const {Schema, model}= require('mongoose')

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true
    },
    description:{
        type: String,
        required:true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true
    },
  
  comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
  }],
  author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
      
  },
  date: { type: Date, default: Date.now },

});

const Post = model('Post', postSchema);
module.exports = Post