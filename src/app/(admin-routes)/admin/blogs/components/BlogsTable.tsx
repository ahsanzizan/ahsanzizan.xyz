"use client";
import { deleteBlogAction } from "@/actions/deleteActions";
import { Button, Link } from "@/app/components/global/ui/button";
import { H2, H3 } from "@/app/components/global/ui/text";
import { Blog } from "@/types/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SocialMediasTable({
  blogs,
}: Readonly<{ blogs: Blog[] }>) {
  const router = useRouter();
  const simplifiedBlogs: Blog[] = JSON.parse(JSON.stringify(blogs));

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <H3>Blogs</H3>
        <Link href={"/admin/blogs/new"}>New</Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedBlogs.map((blog) => (
          <div
            key={blog._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex w-3/4 items-center gap-2">
              <H2>{blog?.title}</H2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteBlogAction(blog._id.toString()).then(() => {
                    toast.success("Successfully deleted a blog", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </Button>
              <Link href={"/admin/blogs/" + blog._id.toString()}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
