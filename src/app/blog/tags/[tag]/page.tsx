import { getAllBlogs } from "@/database/blog.query";
import Navbar from "@/app/components/Parts/Navbar";
import Footer from "@/app/components/Parts/Footer";
import { BackButton } from "@/app/components/global/Buttons";
import { getContentbyKey } from "@/database/content.query";
import BlogPreview from "@/app/components/global/BlogPreview";

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
              <BlogPreview key={i} blog={blog} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
