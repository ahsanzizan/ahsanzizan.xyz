import { Blog } from "@/types/models";
import { stringifyDate } from "@/utils/utilityFunctions";
import { StandardLinkButton } from "./Buttons";
import LeftArrowIcon from "./Icons/LeftArrow";

export default function BlogPreview({ blog }: Readonly<{ blog: Blog }>) {
  return (
    <article className="w-full py-4 md:py-10">
      <h2 className="mb-1 text-xl drop-shadow-glow md:text-4xl">
        {blog.title}
      </h2>
      <div className="mb-4">
        <dl className="mx-1">
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm font-medium leading-6 sm:text-base">
            <span>Published </span>
            <time>{stringifyDate(blog.createdAt)}</time>
          </dd>
        </dl>
        <span className="text-sm sm:text-base">by {blog.author}</span>
      </div>
      <p className="mb-7 line-clamp-2 text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
        {blog.content}
      </p>
      <StandardLinkButton href={"/blog/" + blog.link}>
        Read More{" "}
        <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
      </StandardLinkButton>
    </article>
  );
}
