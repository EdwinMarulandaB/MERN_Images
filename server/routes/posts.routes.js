import { Router } from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/posts.controllers.js";

const router = Router();

router.get("/", getPosts);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.get("/:id", getPost);

export default router;
