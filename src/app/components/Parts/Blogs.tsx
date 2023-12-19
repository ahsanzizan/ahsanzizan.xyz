import { getAllBlogs } from "@/database/blog.query";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";
import BlogPreview from "../global/BlogPreview";

export default async function Blogs() {
  const blogs = (await getAllBlogs())
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .filter((blog) => !blog.link.includes("private"))
    .slice(0, 3);

  return (
    <section id="blogs" className="mb-32 w-full py-12">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
        <StandardLinkButton href={"/blog/"}>
          See All{" "}
          <LeftArrowIcon className="m-1 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-1" />
        </StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {blogs.map((blog, i) => (
          <BlogPreview key={i} blog={blog} />
        ))}
      </div>
    </section>
  );
}
