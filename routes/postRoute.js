const express = require("express");
const router = express.Router();

const {
  getPost,
  addPost,
  updatePost,
} = require("../controllers/postController");

router.get("/", getPost);
router.post("/", addPost);
router.patch("/:id", updatePost);

module.exports = router;
