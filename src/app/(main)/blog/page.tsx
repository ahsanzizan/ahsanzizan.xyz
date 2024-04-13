import BlogModel from "@/models/Blog.model";
import { Blog as BlogType } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import {
  calculateReadTime,
  isInteger,
  truncateString,
} from "@/utils/utilities";
import { Model } from "mongoose";
import PaginatedNavigator from "../../components/global/PaginatedNavigator";
import { Link } from "@/app/components/global/ui/button";
import { H4, P } from "@/app/components/global/ui/text";
import { SectionContainer } from "@/app/components/global/ui/container";
import cn from "@/lib/clsx";
import { Anchor } from "@/app/components/global/ui/anchor";
import { BlogPreview } from "@/app/components/global/ui/blog-preview";

export default async function Blog({
  searchParams,
}: Readonly<{ searchParams: { [key: string]: string | string[] } }>) {
  const page = isInteger(searchParams?.page as unknown as string)
    ? parseInt(searchParams?.page as unknown as string)
    : 1;
  const { datas: blogs, maxPage }: { datas: BlogType[]; maxPage: number } =
    await getPaginatedResult({
      model: BlogModel as Model<BlogType>,
      sort: { createdAt: -1 },
      perPage: 5,
      page,
    });

  return (
    <SectionContainer id="blogs">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <div>
          <H4 className="mb-2">Blog Articles</H4>
          <PaginatedNavigator segment="blog" page={page} maxPage={maxPage} />
        </div>
        <Link href={"/blog/tags"} variant={"default"}>
          See Tags
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {blogs.map((blog: BlogType) => (
          <BlogPreview key={blog._id.toString()} blog={blog} />
        ))}
      </div>
    </SectionContainer>
  );
}

export const revalidate = 0;
