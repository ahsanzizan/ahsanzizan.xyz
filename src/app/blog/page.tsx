import { getAllBlogs } from "@/lib/queries/blog.query";
import { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Parts/Navbar";
import Footer from "../components/Parts/Footer";
import Link from "next/link";
import { stringifyDate } from "@/utils/utilityFunctions";
import { getContentbyKey } from "@/lib/queries/content.query";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Ahsan's blog post",
};

export default async function Blog() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
            <Link
              href={"/blog/tags"}
              className="group inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-base transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
            >
              See Tags{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="m-1 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
                  fill="current"
                />
              </svg>
            </Link>
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
                <Link
                  href={"/blog/" + blog.link}
                  className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
                >
                  Read More{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4"
                  >
                    <path
                      d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
                      fill="current"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const revalidate = 0;
