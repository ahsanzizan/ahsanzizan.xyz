"use server";

import { deleteBlogById, upsertBlog } from "@/database/blog.query";
import {
  deleteCertificateById,
  upsertCertificate,
} from "@/database/cerficate.query";
import { deleteContentById, upsertContent } from "@/database/content.query";
import {
  deleteExperienceById,
  upsertExperience,
} from "@/database/experience.query";
import { deleteProjectById, upsertProject } from "@/database/project.query";
import {
  deleteSocialMediaById,
  upsertSocialMedia,
} from "@/database/socialMedia.query";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function upsertSocialMediaAction(formData: FormData) {
  await upsertSocialMedia(formData.get("_id") as string, {
    name: formData.get("name") as string,
    svgPath: formData.get("svgPath") as string,
    url: formData.get("url") as string,
  });

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function upsertContentAction(formData: FormData) {
  await upsertContent(formData.get("_id") as string, {
    key: formData.get("key") as string,
    content: formData.get("content") as string,
  });

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function upsertProjectAction(formData: FormData) {
  await upsertProject(formData.get("_id") as string, {
    title: formData.get("title") as string,
    url: formData.get("url") as string,
    image: formData.get("image") as string,
    link: formData.get("link") as string,
    description: formData.get("description") as string,
  });

  revalidatePath("/works");
  revalidatePath("/", "layout");
  redirect("/admin/works");
}

export async function upsertBlogAction(formData: FormData) {
  const session = await getServerSession(authOptions);

  await upsertBlog(formData.get("_id") as string, {
    title: formData.get("title") as string,
    author: session?.user?.username,
    content: formData.get("content") as string,
    link: formData.get("link") as string,
    tags:
      formData?.get("tags") !== ""
        ? formData.get("tags")?.toString().split(" ")
        : [],
  });

  revalidatePath("/", "layout");
  revalidatePath("/blog");
  redirect("/admin/blogs");
}

export async function upsertExperienceAction(formData: FormData) {
  await upsertExperience(formData.get("_id") as string, {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    startDate: new Date(formData.get("startDate") as string),
    endDate: formData.get("endDate")
      ? new Date(formData.get("endDate") as string)
      : undefined,
  });

  revalidatePath("/about");
  revalidatePath("/", "layout");
  redirect("/admin/experiences");
}
export async function upsertCertificateAction(formData: FormData) {
  await upsertCertificate(formData.get("_id") as string, {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
    link: formData.get("link") as string,
  });

  revalidatePath("/about");
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function deleteSocialMediaAction(id: string) {
  await deleteSocialMediaById(id);
  revalidatePath("/", "layout");
}

export async function deleteContentAction(id: string) {
  await deleteContentById(id);
  revalidatePath("/", "layout");
}

export async function deleteProjectAction(id: string) {
  await deleteProjectById(id);
  revalidatePath("/works");
  revalidatePath("/", "layout");
}

export async function deleteBlogAction(id: string) {
  await deleteBlogById(id);
  revalidatePath("/blog");
  revalidatePath("/", "layout");
}

export async function deleteExperienceAction(id: string) {
  await deleteExperienceById(id);
  revalidatePath("/about");
  revalidatePath("/", "layout");
}

export async function deleteCertificateAction(id: string) {
  await deleteCertificateById(id);
  revalidatePath("/about");
  revalidatePath("/", "layout");
}
