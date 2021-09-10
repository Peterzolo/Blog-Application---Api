const Post = require("../model/postModel");

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
  const { title, message, author, selectedFile, tags, likeCount, createdArt } =
    req.body;
  console.log(req.body);

  let addPost = new Post({
    title,
    message,
    author,
    selectedFile,
    tags,
    likeCount,
    createdArt,
  });
  try {
    await addPost.save();
    res
      .status(201)
      .json({ success: "Post successfully sent to database", addPost });
  } catch (error) {
    res.status(401).json({ error_message: "Something went wrong" });
  }
};
