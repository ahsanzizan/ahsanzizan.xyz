import { getAllBlogs } from "@/database/blog.query";
import { Metadata } from "next";
import Navbar from "../components/Parts/Navbar";
import Footer from "../components/Parts/Footer";
import { getContentbyKey } from "@/database/content.query";
import { StandardLinkButton } from "../components/global/Buttons";
import BlogPreview from "../components/global/BlogPreview";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Ahsan's blog post",
};

export default async function Blog() {
  const blogs = (await getAllBlogs())
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .filter((blog) => !blog.link.includes("private"));
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
            <StandardLinkButton href={"/blog/tags"}>
              See Tags
            </StandardLinkButton>
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {blogs.map((blog, i) => (
              <BlogPreview key={i} blog={blog} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const revalidate = 0;
