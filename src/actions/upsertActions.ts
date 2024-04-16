"use server";

import { upsertBlog } from "@/database/blog.query";
import { upsertCertificate } from "@/database/cerficate.query";
import { upsertContent } from "@/database/content.query";
import { upsertExperience } from "@/database/experience.query";
import { upsertProject } from "@/database/project.query";
import { upsertSocialMedia } from "@/database/socialMedia.query";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function revalidateAndRedirect(paths: string[], redirectTo: string) {
  for (const path of paths) {
    revalidatePath(path);
  }
  revalidatePath("/", "layout");
  redirect(redirectTo);
}

export async function upsertSocialMediaAction(formData: FormData) {
  await upsertSocialMedia(formData.get("_id") as string, {
    name: formData.get("name") as string,
    svgPath: formData.get("svgPath") as string,
    url: formData.get("url") as string,
  });

  await revalidateAndRedirect(["/"], "/admin");
}

export async function upsertContentAction(formData: FormData) {
  await upsertContent(formData.get("_id") as string, {
    key: formData.get("key") as string,
    content: formData.get("content") as string,
  });

  await revalidateAndRedirect(["/"], "/admin");
}

export async function upsertProjectAction(formData: FormData) {
  await upsertProject(formData.get("_id") as string, {
    title: formData.get("title") as string,
    url: formData.get("url") as string,
    image: formData.get("image") as string,
    link: formData.get("link") as string,
    description: formData.get("description") as string,
  });

  await revalidateAndRedirect(["/(main)/works", "/"], "/admin/works");
}

export async function upsertBlogAction(formData: FormData) {
  const session = await getServerSession(authOptions);

  await upsertBlog(formData.get("_id") as string, {
    title: formData.get("title") as string,
    author: session?.user?.username!,
    content: formData.get("content") as string,
    link: formData.get("link") as string,
    tags:
      formData?.get("tags") !== ""
        ? formData.get("tags")?.toString().split(" ")
        : [],
  });

  await revalidateAndRedirect(["/", "/blog"], "/admin/blogs");
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

  await revalidateAndRedirect(["/(main)/about", "/"], "/admin/experiences");
}

export async function upsertCertificateAction(formData: FormData) {
  await upsertCertificate(formData.get("_id") as string, {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as string,
    url: formData.get("url") as string,
  });

  await revalidateAndRedirect(["/(main)/about", "/"], "/admin");
}
