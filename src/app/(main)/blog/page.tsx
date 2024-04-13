import { BlogPreview } from "@/app/components/global/ui/blog-preview";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H4 } from "@/app/components/global/ui/text";
import BlogModel from "@/models/Blog.model";
import { Blog as BlogType } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { isInteger } from "@/utils/utilities";
import { Model } from "mongoose";
import PaginatedNavigator from "../../components/global/PaginatedNavigator";

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
      <div className="mb-5 flex w-full flex-col justify-between md:mb-12 md:flex-row md:items-center">
        <div className={"mb-4 flex flex-col"}>
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
