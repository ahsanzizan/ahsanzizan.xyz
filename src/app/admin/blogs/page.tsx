import BlogsTable from "./components/BlogsTable";
import { getAllBlogs } from "@/lib/queries/blog.query";

export default async function Works() {
  const blogs = JSON.parse(JSON.stringify(await getAllBlogs()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <BlogsTable blogs={blogs} />
      </div>
    </section>
  );
}

export const revalidate = 0;
