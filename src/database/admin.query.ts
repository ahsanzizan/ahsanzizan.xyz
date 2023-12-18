import AdminModel from "@/models/Admin.model";
import { validate, generate } from "../lib/hash";
import { connectAndQuery } from "../utils/connectAndQuery";
import { Admin } from "@/types/models";

type auth = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  admin?: Admin;
};

type AdminCreateInput = {
  username: string;
  password: string;
};

export async function findAdminByUname(username: string) {
  return connectAndQuery(async () => await AdminModel.findOne({ username }));
}

export async function getAllAdmins(): Promise<Admin[] | undefined> {
  return connectAndQuery(async () => await AdminModel.find({}));
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

export async function createAdmin(admin: AdminCreateInput) {
  return connectAndQuery(async () => {
    const hashedPassword = generate(admin.password || "");
    const createAdmin = await AdminModel.create({
      ...admin,
      password: hashedPassword,
    });

    return createAdmin;
  });
}
