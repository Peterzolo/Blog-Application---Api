const express = require("express");
const router = express.Router();

const {
  getPost,
  addPost,
  updatePost,
  deletePost,
  postLike,
} = require("../controllers/postController");

router.get("/", getPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/postLike", postLike);

module.exports = router;
