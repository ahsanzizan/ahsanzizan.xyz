import Footer from "@/app/components/parts/Footer";
import { BackButton } from "@/app/components/global/Buttons";
import Wrapper from "@/app/components/global/Wrapper";
import { getBlogByLink } from "@/database/blog.query";
import BlogModel from "@/models/Blog.model";
import { Blog } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import {
  calculateReadTime,
  stringifyDate,
  truncateString,
} from "@/utils/utilities";
import { Model } from "mongoose";
import { ArticleJsonLd } from "next-seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import ViewMD from "./components/ViewMD";

export async function generateMetadata({
  params,
}: Readonly<{
  params: { link: string };
}>) {
  const blog = await getBlogByLink(params.link);
  if (blog)
    return {
      title: blog.title,
      description: "A blog by " + blog.author,
    };

  return {
    title: "Blog not found",
  };
}

export default async function ViewBlog({
  params,
}: Readonly<{
  params: { link: string };
}>) {
  const blog = await getBlogByLink(params.link);
  if (!blog) notFound();

  const { datas: otherBlogs }: { datas: Blog[] } = await getPaginatedResult({
    model: BlogModel as Model<Blog>,
    sort: { createdAt: -1 },
    page: 1,
    perPage: 5,
  });

  return (
    <Wrapper>
      <ArticleJsonLd
        authorName={blog.author}
        datePublished={stringifyDate(blog.createdAt)}
        description="A blog by Ahsan Azizan"
        title={blog.title}
        url={`https://www.ahsanzizan.xyz/blog/${blog.link}`}
        images={[]}
        useAppDir
      />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-24">
        <BackButton />
        <section id="view-blog" className="mb-32 w-full py-12">
          <div className="block w-full">
            <div className="mb-7 block">
              <h1 className="mb-1 text-4xl drop-shadow-glow md:text-7xl">
                {blog.title}
              </h1>
              <div className="mb-0">
                Published at {stringifyDate(blog.createdAt)} by {blog.author}
              </div>
              <div className="mb-2">
                {calculateReadTime(blog.content)} minutes read
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {blog.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={"/blog/tags/" + tag}
                    className="text-neutral-400"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-5 md:flex-row">
              <div className="w-full md:w-[75%]">
                <ViewMD markdown={blog.content} />
              </div>
              <div className="w-full md:w-[25%]">
                <h4 className="mb-4 text-lg drop-shadow-glow md:text-2xl">
                  Latest From Me
                </h4>
                <div className="flex h-fit w-full flex-col gap-5 divide-y divide-white rounded-lg border border-white p-5">
                  {otherBlogs.map((otherBlog) => (
                    <article
                      className="w-full py-4"
                      key={otherBlog._id.toString()}
                    >
                      <Link
                        href={`/blog/${otherBlog.link}`}
                        className="mb-1 text-base drop-shadow-glow transition-all duration-300 hover:text-neutral-400 md:text-2xl"
                      >
                        {truncateString(otherBlog.title, 20)}
                      </Link>
                      <div className="block">
                        <dl className="mx-1">
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-medium leading-6">
                            <span>Published </span>
                            <time>{stringifyDate(otherBlog.createdAt)}</time>
                          </dd>
                        </dl>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
