import { getAllBlogs } from "@/lib/queries/blog.query";
import Link from "next/link";
import InfiniteScrollAnimation from "./Parts/InfiniteScrollAnimation";
import { calculateReadTime, stringifyDate } from "@/utils/utilityFunctions";

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <section id="blog" className="mx-auto max-w-5xl px-5 py-32">
      <h2 className="mb-6 text-7xl font-bold">Latest Blogs</h2>
      <div className="flex w-full flex-col divide-y-2 divide-black">
        {blogs?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 3).map((blog, i) => (
          <Link key={`blog_${i}`} href={"/blog/hello-world"} className="group">
            <article className="flex w-full items-center gap-5 bg-white py-5 transition-all duration-300 group-hover:gap-7 group-hover:bg-black group-hover:text-white">
              <div className="relative h-24 w-24">
                <InfiniteScrollAnimation className="h-full w-full" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable={false}
                  viewBox="0 0 24 24"
                  className="absolute left-0 top-0 inline-block h-full w-full shrink-0 select-none fill-white"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
                </svg>
              </div>
              <div className="block w-auto">
                <h3 className="mb-1 text-3xl font-bold">{blog.title}</h3>
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-semibold leading-6">
                    <time>{stringifyDate(new Date(blog.createdAt))}</time>
                  </dd>
                </dl>
                <p className="text-sm font-medium">Estimated {calculateReadTime(blog.content)} minutes read</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
