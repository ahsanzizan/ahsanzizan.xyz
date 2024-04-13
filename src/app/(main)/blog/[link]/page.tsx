import { SectionContainer } from "@/app/components/global/ui/container";
import { H1, H3, H4, P } from "@/app/components/global/ui/text";
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
import { notFound } from "next/navigation";
import ViewMD from "./components/ViewMD";
import { Link } from "@/app/components/global/ui/button";
import cn from "@/lib/clsx";
import { BlogPreview } from "@/app/components/global/ui/blog-preview";

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
    <>
      <ArticleJsonLd
        authorName={blog.author}
        datePublished={stringifyDate(blog.createdAt)}
        description="A blog by Ahsan Azizan"
        title={blog.title}
        url={`https://www.ahsanzizan.xyz/blog/${blog.link}`}
        images={[]}
        useAppDir
      />
      <SectionContainer id="view-blog">
        <div className="block w-full">
          <div className="mb-7 block">
            <H1>{blog.title}</H1>
            <div className={cn("mb-2 flex items-center gap-4")}>
              <P>{calculateReadTime(blog.content)} min read</P>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <P>
                Published at {stringifyDate(blog.createdAt)} by {blog.author}
              </P>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {blog.tags.map((tag) => (
                <Link key={tag} href={"/blog/tags/" + tag} variant={"default"}>
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex w-full flex-col justify-between gap-5 md:flex-row",
            )}
          >
            <div className={cn("w-full md:w-[75%]")}>
              <ViewMD markdown={blog.content} />
            </div>
            <div className={cn("w-full md:w-[25%]")}>
              <H3 className="mb-2">Latest From Me</H3>
              <div
                className={cn(
                  "flex h-fit w-full flex-col gap-5 divide-y divide-white rounded-lg border border-white p-5",
                )}
              >
                {otherBlogs.map((otherBlog) => (
                  <BlogPreview
                    key={otherBlog._id.toString()}
                    blog={otherBlog}
                    contentThreshold={80}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export const revalidate = 0;
