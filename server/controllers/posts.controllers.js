import Post from "../models/post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newPost = new Post({ title, description, image });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const post = await Post.findByIdAndUpdate(id, newData, { new: true });

    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const removePost = await Post.findByIdAndDelete(id);
    if (!removePost) return res.json({ message: "Post not found" });

    if (removePost.image.public_id) {
      await deleteImage(removePost.image.public_id);
    }

    res.json(removePost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
