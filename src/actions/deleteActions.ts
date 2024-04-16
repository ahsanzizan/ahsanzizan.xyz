"use server";

import {
  deleteBlogById,
  deleteCertificateById,
  deleteContentById,
  deleteExperienceById,
  deleteProjectById,
  deleteSocialMediaById,
} from "@/database";
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
