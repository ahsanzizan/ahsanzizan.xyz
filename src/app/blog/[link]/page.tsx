import Footer from "@/app/components/Parts/Footer";
import { BackButton } from "@/app/components/global/Buttons";
import Wrapper from "@/app/components/global/Wrapper";
import { getBlogByLink } from "@/database/blog.query";
import { calculateReadTime, stringifyDate } from "@/utils/utilityFunctions";
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
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <BackButton />
        <section id="view-blog" className="mb-32 w-full py-12">
          <div className="mb-7 block">
            <h1 className="mb-1 text-4xl drop-shadow-glow md:text-7xl">
              {blog.title}
            </h1>
            <div className="mb-0">
              Published at {stringifyDate(blog.createdAt)} by {blog.author}
            </div>
            <div className="mb-2">
              {calculateReadTime(blog.content)} Min Read
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {blog.tags.map((tag, i) => (
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
          <ViewMD markdown={blog.content} />
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
