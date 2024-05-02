import { createAdmin } from "@/database";
import { authOptions } from "@/lib/auth";
import { Created, Forbidden, InternalServerError } from "@/utils/apiResponses";
import { getServerSession } from "next-auth";

// This route is used to create a new admin entity
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Forbidden("User not authenticated");

  try {
    const data = await req.formData();
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    const newAdmin = await createAdmin({ username, password });

    return Created({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    return InternalServerError();
  }
}
