import { getAllBlogs } from "@/database/blog.query";
import Link from "next/link";
import { stringifyDate } from "@/utils/utilityFunctions";
import Navbar from "@/app/components/Parts/Navbar";
import Footer from "@/app/components/Parts/Footer";
import { BackButton, StandardLinkButton } from "@/app/components/Buttons";
import { getContentbyKey } from "@/database/content.query";
import LeftArrowIcon from "@/app/components/Icons/LeftArrow";

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  return {
    title: `Blogs with ${params.tag}`,
    description: "Ahsan's blog post",
  };
}

export default async function Blogs({ params }: { params: { tag: string } }) {
  const blogs = await getAllBlogs();
  const blogsWithTag = blogs.filter((blog) => blog.tags.includes(params.tag));
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <BackButton />
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">
              Blogs with #{params.tag}
            </h4>
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {blogsWithTag.map((blog, i) => (
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
        <Footer />
      </main>
    </>
  );
}
