"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Blog } from "@/models/Blog.model";
import { deleteBlogAction } from "../../actions";
import { StandardButton, StandardLinkButton } from "@/app/components/Buttons";

export default function SocialMediasTable({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();
  const simplifiedBlogs: Blog[] = JSON.parse(JSON.stringify(blogs));

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
        <StandardLinkButton href={"/admin/blogs/new"}>New</StandardLinkButton>
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
              <StandardButton
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
              </StandardButton>
              <StandardLinkButton href={"/admin/blogs/" + blog._id.toString()}>
                Edit
              </StandardLinkButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
