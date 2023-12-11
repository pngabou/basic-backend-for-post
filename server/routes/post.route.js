const router = require("express").Router();
const  postController = require("../controllers/post.controller.js");
const {allPosts, addPost} = require("../controllers/post.controller");

router.get("/",allPosts);
router.post("/",addPost);

module.exports = router;