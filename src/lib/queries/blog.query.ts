import BlogModel, { Blog } from "@/models/Blog.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllBlogs(): Promise<Blog[]> {
  return connectAndQuery(async () => await BlogModel.find({}));
}

export async function getBlogByLink(link: string): Promise<Blog> {
  return connectAndQuery(async () => await BlogModel.findOne({ link }));
}

export async function deleteBlogById(id: string) {
  return connectAndQuery(async () => await BlogModel.deleteOne({ _id: id }));
}

type CreateBlogInput = {
  title: string;
  content: string;
  link: string;
  author: string;
  tags: string[];
};

export async function createBlog(blog: CreateBlogInput) {
  return connectAndQuery(async () => await BlogModel.create({ ...blog }));
}
