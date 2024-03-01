import { getAllBlogs } from "@/database/blog.query";
import BlogPreview from "../global/BlogPreview";
import { StandardLinkButton } from "../global/Buttons";

export default async function Blogs() {
  const blogs = await getAllBlogs(0, 3);

  return (
    <section id="blogs" className="mb-32 w-full py-12">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
        <StandardLinkButton href={"/blog/"}>See All</StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {blogs.map((blog, i) => (
          <BlogPreview key={blog._id.toString()} blog={blog} />
        ))}
      </div>
    </section>
  );
}
