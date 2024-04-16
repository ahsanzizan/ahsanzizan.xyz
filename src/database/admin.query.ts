import { Admin, Prisma } from "@prisma/client";
import { validate, generate } from "../lib/hash";
import prisma from "@/lib/prisma";

type auth = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  admin?: Admin;
};

export async function findAdminByUname(username: string) {
  const admin = await prisma.admin.findUnique({ where: { username } });
  return admin;
}

export async function authenticateAdmin(
  username: string,
  password: string,
): Promise<auth> {
  const admin = await findAdminByUname(username);

  let result: auth = {
    status: "INVALID",
    admin: undefined,
  };

  if (!admin) {
    result.status = "INVALID";
    return result;
  }

  if (!password) {
    result.status = "NO_PASSWORD";
  } else {
    const isValidated = await validate(password, admin.password);
    if (isValidated) {
      result.status = "SUCCESS";
      result.admin = admin;
    }
  }

  return result;
}

export async function createAdmin(admin: Prisma.AdminCreateInput) {
  try {
    const hashedPassword = generate(admin.password);
    await prisma.admin.create({
      data: { ...admin, password: hashedPassword },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
