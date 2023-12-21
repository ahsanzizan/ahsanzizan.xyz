import { getAllBlogs } from "@/database/blog.query";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const getAll = await getAllBlogs();
    return NextResponse.json(
      {
        status: 200,
        message: "Successfully get all blogs",
        blogs: getAll,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
