const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controllers");
const router = express.Router();

//!Recupère les données
router.get("/", getPosts);

//!Envoi les données
router.post("/", setPosts);

//!Mets à jour les données
router.put("/:id", editPost);

//!Supprime les données
router.delete("/:id", deletePost);

//!Pour liker un message
router.patch("/like-post/:id", likePost);

//!Pour Disliker un message
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
