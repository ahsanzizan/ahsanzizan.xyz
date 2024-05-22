import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getAllSocialMedias() {
  const socialMedias = await prisma.socialMedia.findMany();
  return socialMedias;
}

export async function getSocialMediaById(id: string) {
  const socialMedia = await prisma.socialMedia.findUnique({ where: { id } });
  return socialMedia;
}

export async function updateSocialMediaById(
  id: string,
  data: Prisma.SocialMediaUncheckedUpdateInput,
) {
  try {
    await prisma.socialMedia.update({ where: { id }, data });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteSocialMediaById(id: string) {
  try {
    await prisma.socialMedia.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertSocialMedia(
  name: string,
  data: Prisma.SocialMediaUncheckedCreateInput,
) {
  try {
    await prisma.socialMedia.upsert({
      where: { name },
      create: data,
      update: data,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
