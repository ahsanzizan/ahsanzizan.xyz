import cn from "@/lib/clsx";
import BlogModel from "@/models/Blog.model";
import { Blog } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { Model } from "mongoose";
import { SectionContainer } from "../global/ui/container";
import { H1, H4, P } from "../global/ui/text";
import { calculateReadTime, truncateString } from "@/utils/utilities";
import { Anchor } from "../global/ui/anchor";

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
          <H1>Blog Articles</H1>
        </div>
        <div
          className={cn(
            "flex w-full flex-col divide-y divide-white rounded-full lg:w-1/2",
          )}
        >
          {blogs.map((blog) => {
            return (
              <div key={blog._id.toString()} className={cn("w-full py-5")}>
                <H4 className="mb-[14px] flex items-center gap-1">
                  {blog.title}
                </H4>
                <P className="mb-3">{truncateString(blog.content, 120)}</P>
                <div className={cn("flex items-center gap-2")}>
                  <Anchor href={"/blog/" + blog.link} variant={"default"}>
                    Read more
                  </Anchor>
                  <span className={cn("h-1 w-1 rounded-full bg-white")}></span>
                  <P>{calculateReadTime(blog.content)} min</P>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
