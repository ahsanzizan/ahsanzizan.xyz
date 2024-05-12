import { getBlogs } from "@/database";
import { InternalServerError, Success } from "@/utils/apiResponses";

export async function GET() {
  try {
    const getAll = await getBlogs();
    return Success({
      message: "Successfully retrieved all blogs",
      blogs: getAll,
    });
  } catch (error) {
    return InternalServerError();
  }
}
