import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getAllContents() {
  const contents = await prisma.content.findMany();
  return contents;
}

export async function getContentById(id: string) {
  const content = await prisma.content.findUnique({ where: { id } });
  return content;
}

export async function getContentbyKey(key: string) {
  const content = await prisma.content.findUnique({ where: { key } });
  return content;
}

export async function deleteContentById(id: string) {
  try {
    await prisma.content.findUnique({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertContent(
  id: string,
  data: Prisma.ContentUncheckedCreateInput,
) {
  try {
    await prisma.content.upsert({ where: { id }, create: data, update: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
