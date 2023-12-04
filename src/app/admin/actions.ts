"use server";

import { authOptions } from "@/lib/auth";
import { deleteBlogById, upsertBlog } from "@/lib/queries/blog.query";
import { deleteExperienceById } from "@/lib/queries/experience.query";
import { deleteProjectById, upsertProject } from "@/lib/queries/project.query";
import {
  upsertSocialMedia,
  deleteSocialMediaById,
} from "@/lib/queries/socialMedia.query";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function upsertSocialMediaAction(formData: FormData) {
  try {
    await upsertSocialMedia(formData.get("_id") as string, {
      name: formData.get("name") as string,
      svgPath: formData.get("svgPath") as string,
      url: formData.get("url") as string,
    });
  } catch (error) {}
  redirect("/admin");
}

export async function upsertProjectAction(formData: FormData) {
  try {
    await upsertProject(formData.get("_id") as string, {
      title: formData.get("title") as string,
      url: formData.get("url") as string,
      image: formData.get("image") as string,
      link: formData.get("link") as string,
      description: formData.get("description") as string,
    });
  } catch (error) {}
  redirect("/admin/works");
}

export async function upsertBlogAction(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);

    await upsertBlog(formData.get("_id") as string, {
      title: formData.get("title") as string,
      author: session?.user?.username,
      content: formData.get("content") as string,
      link: formData.get("link") as string,
      tags: formData.get("tags")?.toString().split(" "),
    });
  } catch (error) {}
  redirect("/admin/blogs");
}

export async function deleteSocialMediaAction(id: string) {
  try {
    await deleteSocialMediaById(id);
  } catch (error) {}
}

export async function deleteProjectAction(id: string) {
  try {
    await deleteProjectById(id);
  } catch (error) {}
}

export async function deleteBlogAction(id: string) {
  try {
    await deleteBlogById(id);
  } catch (error) {}
}

export async function deleteExperienceAction(id: string) {
  try {
    await deleteExperienceById(id);
  } catch (error) {}
}
