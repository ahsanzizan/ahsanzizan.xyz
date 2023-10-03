import connectDB from "../mongoose";
import AdminModel, { IAdmin } from "@/models/Admin.model";
import { validate, generate } from "../hash";

export async function findAdminByUname(
  username: string,
): Promise<IAdmin | undefined> {
  await connectDB();
  const result = await AdminModel.findOne({ username });
  return result;
}

export async function getAllAdmins(): Promise<IAdmin[] | undefined> {
  await connectDB();
  const result = await AdminModel.find({});
  return result;
}

type Admin = {
  username: string;
  password?: string;
};

export async function createUser(admin: Admin) {
  await connectDB();
  const hashedPassword = generate(admin.password || "");
  const createAdmin = await AdminModel.create({
    ...admin,
    password: hashedPassword,
  });

  return createAdmin;
}
