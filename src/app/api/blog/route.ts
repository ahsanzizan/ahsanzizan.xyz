import { createBlog, getAllBlogs } from "@/lib/queries/blog.query";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { IBlog } from "@/models/Blog.model";

export async function GET(req: Request) {
  try {
    const getAll = await getAllBlogs();
    return NextResponse.json(
      {
        status: 200,
        message: "Successfully created a new blog",
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

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user)
    return NextResponse.json(
      { status: 503, message: "Forbidden request" },
      { status: 503 },
    );

  try {
    const { title, content, link, tags }: IBlog = await req.json();
    if (!title || !content || !link)
      return NextResponse.json(
        { status: 400, message: "Bad request" },
        { status: 400 },
      );

    const newBlog = await createBlog({ title, content, link, tags });
    return NextResponse.json(
      {
        status: 200,
        message: "Successfully created a new blog",
        blog: newBlog,
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
