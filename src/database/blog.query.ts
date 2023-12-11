import BlogModel, { Blog } from "@/models/Blog.model";
import { connectAndQuery } from "../lib/connectAndQuery";

export async function getAllBlogs(): Promise<Blog[]> {
  return connectAndQuery(async () => await BlogModel.find({}));
}

export async function getBlogById(id: string): Promise<Blog> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await BlogModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function getBlogByLink(link: string): Promise<Blog> {
  return connectAndQuery(async () => await BlogModel.findOne({ link }));
}

export async function deleteBlogById(id: string) {
  return connectAndQuery(async () => await BlogModel.deleteOne({ _id: id }));
}

type UpsertBlogInput = {
  title?: string;
  content?: string;
  link?: string;
  author?: string;
  tags?: string[];
};

export async function upsertBlog(id: string, blog: UpsertBlogInput) {
  return connectAndQuery(
    async () =>
      await BlogModel.findByIdAndUpdate(
        id,
        { ...blog },
        { upsert: true },
      ),
  );
}
