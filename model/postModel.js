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
  image: {
    type: String,
  },
  tags: {
    type: [String],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  sendTime: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
