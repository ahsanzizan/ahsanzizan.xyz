"use server";

import { deleteBlogById } from "@/database/blog.query";
import { deleteCertificateById } from "@/database/cerficate.query";
import { deleteContentById } from "@/database/content.query";
import { deleteExperienceById } from "@/database/experience.query";
import { deleteProjectById } from "@/database/project.query";
import { deleteSocialMediaById } from "@/database/socialMedia.query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function deleteAndRevalidate(
  path: string[],
  redirectTo: string,
  deleteFunction: (id: string) => Promise<void>,
  id: string,
) {
  await deleteFunction(id);
  for (const p of path) {
    revalidatePath(p);
  }
  revalidatePath("/", "layout");
  redirect(redirectTo);
}

export async function deleteSocialMediaAction(id: string) {
  await deleteAndRevalidate(["/"], "/", deleteSocialMediaById, id);
}

export async function deleteContentAction(id: string) {
  await deleteAndRevalidate(["/"], "/", deleteContentById, id);
}

export async function deleteProjectAction(id: string) {
  await deleteAndRevalidate(
    ["/(main)/works", "/"],
    "/admin/works",
    deleteProjectById,
    id,
  );
}

export async function deleteBlogAction(id: string) {
  await deleteAndRevalidate(["/blog", "/"], "/admin/blogs", deleteBlogById, id);
}

export async function deleteExperienceAction(id: string) {
  await deleteAndRevalidate(
    ["/(main)/about", "/"],
    "/admin/experiences",
    deleteExperienceById,
    id,
  );
}

export async function deleteCertificateAction(id: string) {
  await deleteAndRevalidate(
    ["/(main)/about", "/"],
    "/admin",
    deleteCertificateById,
    id,
  );
}
