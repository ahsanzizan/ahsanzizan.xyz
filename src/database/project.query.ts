import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getProjects(options?: Prisma.ProjectFindManyArgs) {
  const projects = await prisma.project.findMany(options);
  return projects;
}

export async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({ where: { id } });
  return project;
}

export async function getProjectByLink(link: string) {
  const project = await prisma.project.findUnique({ where: { link } });
  return project;
}

export async function deleteProjectById(id: string) {
  try {
    await prisma.project.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertProject(
  link: string,
  data: Prisma.ProjectUncheckedCreateInput,
) {
  try {
    await prisma.project.upsert({ where: { link }, create: data, update: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
