const Post = require("../model/postModel");
const mongoose = require("mongoose");

exports.getPost = async (req, res) => {
  try {
    const allPosts = await Post.find();
    if (allPosts.length < 1) {
      return res.status(404).json({ Not_Found: "No Post Found" });
    } else {
      res.status(200).json(allPosts);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.addPost = async (req, res) => {
  const { title, message, author, image, tags, likeCount, createdArt } =  
    req.body;

  let addPosts = new Post({
    title,
    message,
    author,
    image,
    tags,
    likeCount,
    createdArt,
  });
  try {
    await addPosts.save();
    res
      .status(201)
      .json({ success: "Post successfully sent to database", addPosts });
  } catch (error) {
    res.status(401).json({ error_message: "Something went wrong" });
  }
};

exports.updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not valid Id");
  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedPost);
};



