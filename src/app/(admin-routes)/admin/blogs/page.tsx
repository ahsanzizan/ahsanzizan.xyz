import { getBlogs } from "@/database";
import BlogsTable from "./components/BlogsTable";

export default async function Blogs() {
  const blogs = JSON.parse(JSON.stringify(await getBlogs()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <BlogsTable blogs={blogs} />
      </div>
    </section>
  );
}
