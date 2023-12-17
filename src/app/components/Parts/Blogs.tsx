import { getAllBlogs } from "@/database/blog.query";
import { stringifyDate } from "@/utils/utilityFunctions";
import Link from "next/link";
import { StandardLinkButton } from "../Buttons";
import LeftArrowIcon from "../Icons/LeftArrow";

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
          <article key={i} className="w-full py-4 md:py-10">
            <h2 className="mb-1 text-xl drop-shadow-glow md:text-4xl">
              {blog.title}
            </h2>
            <div className="mb-4 flex items-center">
              <dl className="mx-1">
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6">
                  <span>Published </span>
                  <time>{stringifyDate(blog.createdAt)}</time>
                </dd>
              </dl>
              <span>by {blog.author}</span>
            </div>
            <p className="mb-7 line-clamp-2 text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
              {blog.content}
            </p>
            <StandardLinkButton href={"/blog/" + blog.link}>
              Read More{" "}
              <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
            </StandardLinkButton>
          </article>
        ))}
      </div>
    </section>
  );
}
