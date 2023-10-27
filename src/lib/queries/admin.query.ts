import connectDB from "../mongoose";
import AdminModel, { IAdmin } from "@/models/Admin.model";
import { validate, generate } from "../hash";

type Admin = {
  username: string;
  password?: string;
};

type auth = {
  status: "SUCCESS" | "NO_PASSWORD" | "INVALID";
  admin?: IAdmin;
};

export async function findAdminByUname(username: string) {
  await connectDB();
  const result = await AdminModel.findOne({ username });
  return result;
}

export async function getAllAdmins(): Promise<IAdmin[] | undefined> {
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
