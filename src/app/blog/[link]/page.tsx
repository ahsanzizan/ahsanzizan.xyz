import Footer from "@/app/components/Parts/Footer";
import Navbar from "@/app/components/Parts/Navbar";
import { ArticleJsonLd } from "next-seo";
import Wrapper from "@/app/components/Wrapper";
import { getBlogByLink } from "@/lib/queries/blog.query";
import ViewMD from "./components/ViewMD";
import { stringifyDate } from "@/utils/utilityFunctions";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";

export async function generateMetadata({
  params,
}: {
  params: { link: string };
}) {
  const blog = await getBlogByLink(params.link);

  return {
    title: blog.title,
    description: "A blog by " + blog.author,
  };
}

export default async function ViewBlog({
  params,
}: {
  params: { link: string };
}) {
  const blog = await getBlogByLink(params.link);

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
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <BackButton />
        <section id="view-blog" className="mb-32 w-full py-12">
          <div className="mb-7 block">
            <h1 className="mb-1 text-4xl drop-shadow-glow md:text-7xl">
              {blog.title}
            </h1>
            <div className="mb-2">
              Published at {stringifyDate(blog.createdAt)} by {blog.author}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {blog.tags.map((tag, i) => (
                <Link
                  key={i}
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
