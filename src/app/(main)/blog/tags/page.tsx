import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1 } from "@/app/components/global/ui/text";
import { getAllBlogs } from "@/database/blog.query";

export async function generateMetadata() {
  return {
    title: `Blog's Tags`,
  };
}

export default async function Tags() {
  const blogs = await getAllBlogs();
  const tags = new Set(blogs.map((blog) => blog.tags).flat());

  return (
    <SectionContainer id="tags">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <H1>Collection of Tags</H1>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        {Array.from(tags).map((tag) => (
          <Link key={tag} href={"/blog/tags/" + tag} variant={"default"}>
            #{tag}
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}

export const revalidate = 0;
