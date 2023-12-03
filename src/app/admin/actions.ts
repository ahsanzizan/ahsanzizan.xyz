"use server";

import { deleteSocialMediaById } from "@/lib/queries/socialMedia.query";

export async function deleteSocialMedia(id: string) {
  try {
    await deleteSocialMediaById(id);
  } catch (error) {}
}
