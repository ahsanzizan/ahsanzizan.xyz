import AdminModel from "@/models/Admin.model";
import { validate, generate } from "../lib/hash";
import { connectAndQuery } from "../utils/utilityFunctions";
import { Admin } from "@/types/models";

type auth = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  admin?: Admin;
};

type AdminCreateInput = {
  username: string;
  password: string;
};

export async function findAdminByUname(username: string): Promise<Admin> {
  return connectAndQuery(async () => await AdminModel.findOne({ username }));
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
    if (!password) {
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
    try {
      const hashedPassword = generate(admin.password || "");
      await AdminModel.create({
        ...admin,
        password: hashedPassword,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
