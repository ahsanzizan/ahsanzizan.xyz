import { getBlogById } from "@/lib/queries/blog.query";
import EditBlog from "./components/EditBlog";
import BackButton from "@/app/components/BackButton";

export default async function EditSocialMedia({
  params,
}: {
  params: { id: string };
}) {
  const blog = JSON.parse(JSON.stringify(await getBlogById(params.id)));

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center">
        <div className="w-full max-w-4xl rounded p-6">
          <BackButton />
          <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
            {blog ? "Edit" : "Create"} a Blog
          </h1>
          {blog && <EditBlog blog={blog} />}
        </div>
      </section>
    </>
  );
}

export const revalidate = 0;
