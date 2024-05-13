import { getBlogById } from "@/database";
import EditBlogForm from "./components/EditBlogForm";
import { Blog } from "@prisma/client";

export default async function EditBlog({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  let blog: Blog = {
    id: "",
    title: "",
    author: "",
    content: "",
    createdAt: new Date(),
    link: "",
    tags: [],
    v: 0,
  };
  if (params.id !== "new") blog = (await getBlogById(params.id))!;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {blog ? "Edit" : "Create"} a Blog
        </h1>
        <EditBlogForm blog={blog} />
      </div>
    </section>
  );
}
