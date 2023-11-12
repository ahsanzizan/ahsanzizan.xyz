import connectDB from "../mongoose";
import AdminModel from "@/models/Admin.model";
import type { Admin } from '@/models/Admin.model'
import { validate, generate } from "../hash";

type auth = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  admin?: Admin;
};

export async function findAdminByUname(username: string) {
  await connectDB();
  const result = await AdminModel.findOne({ username });
  return result;
}

export async function getAllAdmins(): Promise<Admin[] | undefined> {
  await connectDB();
  const result = await AdminModel.find({});
  return result;
}

export async function authenticateAdmin(
  username: string,
  password: string,
): Promise<auth> {
  const find = await findAdminByUname(username);

  let result: auth = {
    status: "INVALID",
    admin: undefined,
  };

  if (find) {
    if (!find) {
      result.status = "NO_PASSWORD";
    } else {
      const isValidated = await validate(password, find.password || "");
      if (isValidated) {
        result.status = "SUCCESS";
        result.admin = find;
      }
    }
  } else {
    result.status = "INVALID";
  }

  return result;
}

export async function createAdmin(admin: Admin) {
  await connectDB();
  const hashedPassword = generate(admin.password || "");
  const createAdmin = await AdminModel.create({
    ...admin,
    password: hashedPassword,
  });

  return createAdmin;
}
