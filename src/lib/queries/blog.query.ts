import BlogModel, { Blog } from "@/models/Blog.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllBlogs(): Promise<Blog[]> {
  return connectAndQuery(async () => await BlogModel.find({}));
}

export async function getBlogByLink(link: string): Promise<Blog> {
  return connectAndQuery(async () => await BlogModel.findOne({ link }));
}

export async function createBlog(blog: Blog) {
  return connectAndQuery(async () => await BlogModel.create({ ...blog }));
}
