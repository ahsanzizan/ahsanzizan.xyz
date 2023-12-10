import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    return Response.json(
      {
        revalidated: true,
        now: Date.now(),
        message: "success",
      },
      { status: 200 },
    );
  }

  return Response.json(
    {
      revalidated: false,
      now: Date.now(),
      message: "missing path to revalidate",
    },
    { status: 400 },
  );
}
