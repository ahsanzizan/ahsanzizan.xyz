import BlogModel, { Blog } from "@/models/Blog.model";
import connectDB from "../mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function getAllBlogs(): Promise<Blog[] | undefined> {
  await connectDB();
  const result = await BlogModel.find({});
  return result;
}

export async function createBlog(blog: Blog) {
  await connectDB();
  const newBlog = await BlogModel.create({ ...blog });

  return newBlog;
}
