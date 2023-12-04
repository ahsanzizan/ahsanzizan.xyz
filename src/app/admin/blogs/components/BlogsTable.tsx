"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Blog } from "@/models/Blog.model";
import { deleteBlogAction } from "../../actions";

export default function SocialMediasTable({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();
  const simplifiedBlogs: Blog[] = JSON.parse(JSON.stringify(blogs));

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
        <Link
          href={"/admin/blogs/new"}
          className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
        >
          New{" "}
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedBlogs.map((blog, i) => (
          <div
            key={i}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex w-3/4 items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {blog?.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteBlogAction(blog._id.toString()).then(() => {
                    toast.success("Successfully deleted a social media", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Delete
              </button>
              <Link
                href={"/admin/social-media/" + blog._id.toString()}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
