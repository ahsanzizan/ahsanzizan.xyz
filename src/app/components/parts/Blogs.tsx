import cn from "@/lib/clsx";
import BlogModel from "@/models/Blog.model";
import { Blog } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { Model } from "mongoose";
import { BlogPreview } from "../global/ui/blog-preview";
import { SectionContainer } from "../global/ui/container";
import { H1, P } from "../global/ui/text";
import { Link } from "../global/ui/button";

export default async function Blogs() {
  const { datas: blogs }: { datas: Blog[] } = await getPaginatedResult({
    model: BlogModel as Model<Blog>,
    sort: { createdAt: -1 },
    perPage: 3,
    page: 1,
  });

  return (
    <SectionContainer id="blogs">
      <div className={cn("relative flex flex-col justify-between lg:flex-row")}>
        <div
          className={cn(
            "mb-[42px] w-full lg:sticky lg:top-[6em] lg:mb-0 lg:h-[170px] lg:w-[45%] lg:self-start",
          )}
        >
          <H1 className={cn("mb-2")}>Blog Articles</H1>
          <P className={cn("mb-4")}>
            I talk about tech, self-development, and more.
          </P>
          <Link href={"/blog"} variant={"default"}>
            See more
          </Link>
        </div>
        <div
          className={cn(
            "flex w-full flex-col divide-y divide-white rounded-full lg:w-1/2",
          )}
        >
          {blogs.map((blog) => {
            return <BlogPreview key={blog._id.toString()} blog={blog} />;
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
