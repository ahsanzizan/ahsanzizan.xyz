import { getAllBlogs } from "@/database/blog.query";
import { InternalServerError, Success } from "@/utils/apiResponses";

export async function GET() {
  try {
    const getAll = await getAllBlogs();
    return Success({
      message: "Successfully retrieved all blogs",
      blogs: getAll,
    });
  } catch (error) {
    return InternalServerError();
  }
}

export const revalidate = 0;
