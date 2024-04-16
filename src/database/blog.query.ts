import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getBlogs(options?: Prisma.BlogFindManyArgs) {
  const blogs = await prisma.blog.findMany(options);
  return blogs;
}

export async function getBlogById(id: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  return blog;
}

export async function getBlogByLink(link: string) {
  const blog = await prisma.blog.findUnique({ where: { link } });
  return blog;
}

export async function deleteBlogById(id: string) {
  try {
    await prisma.blog.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertBlog(
  id: string,
  data: Prisma.BlogUncheckedCreateInput,
) {
  try {
    await prisma.blog.upsert({ where: { id }, create: data, update: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
