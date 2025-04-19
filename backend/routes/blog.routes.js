import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { Upload } from "../middlewares/muler.js";
import {
  allBlogs,
  createBlog,
  deleteBlog,
  userBlogs,
} from "../controllers/blog.controller.js";
const router = express.Router();
router.post("/create", isAuth, Upload.single("image"), createBlog);
router.get("/all", allBlogs);
router.delete("/delete/:id", isAuth, deleteBlog);
router.get("/user/blogs", isAuth, userBlogs);
export default router;
