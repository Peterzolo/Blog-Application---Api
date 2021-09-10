const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    min: 3,
    max: 100,
  },
  message: {
    type: String,
    min: 3,
    max: 3000,
  },
  author: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  tags: {
    type: [String],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdArt: {
    type: Date,
    deffault: new Date(),
  },
});

const Post = mongoose.model("post", postSchema);


module.exports = Post;