import { BlogPreview } from "@/app/components/global/ui/blog-preview";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1, H3, P } from "@/app/components/global/ui/text";
import { getBlogByLink, getBlogs } from "@/database";
import cn from "@/lib/clsx";
import { calculateReadTime, stringifyDate } from "@/utils/utilities";
import { ArticleJsonLd } from "next-seo";
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

  const otherBlogs = await getBlogs({
    where: { NOT: { link: blog.link } },
    orderBy: { createdAt: "desc" },
    take: 4,
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
                  <BlogPreview key={otherBlog.id.toString()} blog={otherBlog} />
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
