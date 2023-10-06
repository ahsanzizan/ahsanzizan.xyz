import { getAllBlogs } from "@/lib/queries/blog.query";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const getBlogs = await getAllBlogs();
    return NextResponse.json(
      { status: 200, message: "Successfully get all blogs", blogs: getBlogs },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
