import { authOptions } from "@/lib/auth";
import { createAdmin } from "@/lib/queries/admin.query";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user)
    return NextResponse.json(
      { status: 503, message: "Forbidden request" },
      { status: 503 },
    );

  try {
    const data = await req.formData();
    const username: string = data.get("username") as string;
    const password: string = data.get("password") as string;

    const newAdmin = await createAdmin({ username, password });

    return NextResponse.json(
      {
        status: 200,
        message: "Admin Created Successfully",
        admin: newAdmin,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
        error,
      },
      { status: 500 },
    );
  }
}
