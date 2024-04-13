import Footer from "@/app/components/parts/Footer";
import Wrapper from "@/app/components/global/Wrapper";
import { getAllBlogs } from "@/database/blog.query";
import { notFound } from "next/navigation";
import { BlogPreview } from "@/app/components/global/ui/blog-preview";
import { SectionContainer } from "@/app/components/global/ui/container";
import cn from "@/lib/clsx";
import { H1 } from "@/app/components/global/ui/text";

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
    <SectionContainer id="blogs">
      <div
        className={cn("mb-5 flex w-full items-center justify-between md:mb-12")}
      >
        <H1>Blogs tagged #{params.tag}</H1>
      </div>
      <div className={cn("flex w-full flex-col divide-y divide-white")}>
        {blogsWithTag.map((blog) => (
          <BlogPreview key={blog._id.toString()} blog={blog} />
        ))}
      </div>
    </SectionContainer>
  );
}
