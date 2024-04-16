import { BlogPreview } from "@/app/components/global/ui/blog-preview";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H4 } from "@/app/components/global/ui/text";
import prisma from "@/lib/prisma";
import { paginator } from "@/utils/paginator";
import { isInteger } from "@/utils/utilities";
import { Blog, Prisma } from "@prisma/client";
import PaginatedNavigator from "../../components/global/ui/paginated-navigator";

const paginate = paginator({ perPage: 5 });

export default async function BlogPage({
  searchParams,
}: Readonly<{ searchParams: { [key: string]: string | string[] } }>) {
  const page = isInteger(searchParams?.page as unknown as string)
    ? parseInt(searchParams?.page as unknown as string)
    : 1;
  const { data: blogs, meta } = await paginate<Blog, Prisma.BlogFindManyArgs>(
    prisma.blog,
    {
      page,
    },
    { orderBy: { createdAt: "desc" } },
  );

  return (
    <SectionContainer id="blogs">
      <div className="mb-5 flex w-full flex-col justify-between md:mb-12 md:flex-row md:items-center">
        <div className={"mb-4 flex flex-col"}>
          <H4 className="mb-2">Blog Articles</H4>
          <PaginatedNavigator
            segment="blog"
            page={page}
            maxPage={meta.lastPage}
          />
        </div>
        <Link href={"/blog/tags"} variant={"default"}>
          See Tags
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {blogs.map((blog: Blog) => (
          <BlogPreview key={blog.id.toString()} blog={blog} />
        ))}
      </div>
    </SectionContainer>
  );
}

export const revalidate = 0;
