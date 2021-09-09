const express = require("express");
const router = express.Router();

const { getPost, addPost } = require("../controllers/postController");

router.get("/", getPost);
router.post("/", addPost);


module.exports = router;
