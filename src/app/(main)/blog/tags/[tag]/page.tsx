import { BlogPreview } from "@/app/components/global/ui/blog-preview";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1 } from "@/app/components/global/ui/text";
import { getAllBlogs } from "@/database/blog.query";
import cn from "@/lib/clsx";
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
