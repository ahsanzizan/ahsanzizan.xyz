import { getBlogs } from "@/database";
import cn from "@/lib/clsx";
import { BlogPreview } from "../global/ui/blog-preview";
import { Link } from "../global/ui/button";
import { SectionContainer } from "../global/ui/container";
import { H1, P } from "../global/ui/text";

export default async function Blogs() {
  const blogs = await getBlogs({ take: 3, orderBy: { createdAt: "desc" } });

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
            return <BlogPreview key={blog.id.toString()} blog={blog} />;
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
