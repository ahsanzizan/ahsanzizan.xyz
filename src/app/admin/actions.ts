"use server";

import {
  upsertSocialMedia,
  deleteSocialMediaById,
} from "@/lib/queries/socialMedia.query";
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

export async function deleteSocialMediaAction(id: string) {
  try {
    await deleteSocialMediaById(id);
  } catch (error) {}
}
