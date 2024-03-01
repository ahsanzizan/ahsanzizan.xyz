import { getAllBlogs, getBlogsCount } from "@/database/blog.query";
import Footer from "../components/Parts/Footer";
import BlogPreview from "../components/global/BlogPreview";
import { StandardLinkButton } from "../components/global/Buttons";
import Wrapper from "../components/global/Wrapper";
import { isInteger } from "@/utils/utilityFunctions";

const PAGE_SIZE = 5;

async function getBlogs(page = 1) {
  const blogsCount = await getBlogsCount();
  const maxPage = Math.ceil(blogsCount / PAGE_SIZE);

  const skip = (page <= maxPage ? page - 1 : 0) * PAGE_SIZE;

  const blogs = await getAllBlogs(skip, PAGE_SIZE);

  return { blogs, maxPage };
}

function validatePage(page: number, maxPage: number) {
  return page <= maxPage && page > 0 ? page : 1;
}

export default async function Blog({
  searchParams,
}: Readonly<{ searchParams: { [key: string]: string | string[] } }>) {
  let page = isInteger(searchParams?.page as unknown as string)
    ? parseInt(searchParams?.page as unknown as string)
    : 1;

  const { blogs, maxPage } = await getBlogs(page);

  page = validatePage(page, maxPage);

  return (
    <Wrapper>
      <main className="mx-auto w-full max-w-[1440px] px-5 py-20">
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <div>
              <h4 className="mb-5 text-lg drop-shadow-glow md:text-2xl">
                Blogs
              </h4>
              <div className="flex items-center gap-4">
                <StandardLinkButton
                  href={`/blog?page=${page - 1}`}
                  className={`${
                    page > 1 ? "opacity-100" : "pointer-events-none opacity-50"
                  }`}
                >
                  {"<"}
                </StandardLinkButton>
                <p>{page}</p>
                <StandardLinkButton
                  href={`/blog?page=${page + 1}`}
                  className={`${
                    page < maxPage
                      ? "opacity-100"
                      : "pointer-events-none opacity-50"
                  }`}
                >
                  {">"}
                </StandardLinkButton>
              </div>
            </div>
            <StandardLinkButton href={"/blog/tags"}>
              See Tags
            </StandardLinkButton>
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {blogs.map((blog) => (
              <BlogPreview key={blog._id.toString()} blog={blog} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
