import BlogModel from "@/models/Blog.model";
import { Blog } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { Model } from "mongoose";
import BlogPreview from "../global/BlogPreview";
import { StandardLinkButton } from "../global/Buttons";

export default async function Blogs() {
  const { datas: blogs }: { datas: Blog[] } = await getPaginatedResult({
    model: BlogModel as Model<Blog>,
    sort: { createdAt: -1 },
    perPage: 3,
    page: 1,
  });

  return (
    <section id="blogs" className="mb-32 w-full py-12">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Blogs</h4>
        <StandardLinkButton href={"/blog/"}>See All</StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {blogs.map((blog) => (
          <BlogPreview key={blog._id.toString()} blog={blog} />
        ))}
      </div>
    </section>
  );
}
