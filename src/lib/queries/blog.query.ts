import BlogModel, { IBlog } from "@/models/Blog.model";
import connectDB from "../mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function getAllBlogs(): Promise<IBlog[] | undefined> {
  await connectDB();
  const result = await BlogModel.find({});
  return result;
}

type Blog = {
  title: string;
  content: string;
  link: string;
  tags: string[];
};

export async function createBlog(blog: Blog) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const author = session?.user?.username;
  const newBlog = await BlogModel.create({ ...blog, author });

  return newBlog;
}
