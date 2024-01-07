import Footer from "@/app/components/Parts/Footer";
import BlogPreview from "@/app/components/global/BlogPreview";
import { BackButton } from "@/app/components/global/Buttons";
import Wrapper from "@/app/components/global/Wrapper";
import { getAllBlogs } from "@/database/blog.query";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: Readonly<{
  params: { tag: string };
}>) {
  const blogs = await getAllBlogs();
  const blogsWithTag = blogs.filter((blog) => blog.tags.includes(params.tag));

  if (blogsWithTag.length !== 0)
    return {
      title: `Blogs with ${params.tag}`,
      description: "Ahsan's blog post",
    };

  return {
    title: `No blogs with tag ${params.tag}`,
  };
}

export default async function Blogs({
  params,
}: Readonly<{ params: { tag: string } }>) {
  const blogs = await getAllBlogs();
  const blogsWithTag = blogs.filter((blog) => blog.tags.includes(params.tag));

  if (blogsWithTag.length === 0) notFound();

  return (
    <Wrapper>
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <BackButton />
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">
              Blogs with #{params.tag}
            </h4>
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {blogsWithTag.map((blog) => (
              <BlogPreview key={blog._id.toString()} blog={blog} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}
