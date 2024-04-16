import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getAllExperiences() {
  const experiences = await prisma.experience.findMany();
  return experiences;
}

export async function getExperienceById(id: string) {
  const experience = await prisma.experience.findUnique({ where: { id } });
  return experience;
}

export async function deleteExperienceById(id: string) {
  try {
    await prisma.experience.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertExperience(
  id: string,
  data: Prisma.ExperienceUncheckedCreateInput,
) {
  try {
    await prisma.experience.upsert({
      where: { id },
      create: data,
      update: data,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
