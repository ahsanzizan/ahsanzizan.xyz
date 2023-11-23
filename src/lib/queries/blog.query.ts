import BlogModel, { Blog } from "@/models/Blog.model";
import connectDB from "../mongoose";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllBlogs(): Promise<Blog[]> {
  return connectAndQuery(async () => await BlogModel.find({}));
}

export async function createBlog(blog: Blog) {
  return connectAndQuery(async () => await BlogModel.create({ ...blog }));
}
