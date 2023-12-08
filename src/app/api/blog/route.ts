import { getAllBlogs } from "@/lib/queries/blog.query";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { Blog } from "@/models/Blog.model";

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
      { status: 500, message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
