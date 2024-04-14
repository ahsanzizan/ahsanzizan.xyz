import cn from "@/lib/clsx";
import { Blog } from "@/types/models";
import { calculateReadTime } from "@/utils/utilities";
import { Anchor } from "./anchor";
import { H4, P } from "./text";

interface BlogPreviewProps {
  blog: Blog;
}

export function BlogPreview({ blog }: Readonly<BlogPreviewProps>) {
  return (
    <div className={cn("w-full py-10")}>
      <H4 className="mb-[14px] flex items-center gap-1">{blog.title}</H4>
      <P className="mb-3 line-clamp-4">{blog.content}</P>
      <div className={cn("flex items-center gap-2")}>
        <Anchor href={"/blog/" + blog.link} variant={"default"}>
          Read more
        </Anchor>
        <span className={cn("h-1 w-1 rounded-full bg-white")}></span>
        <P>{calculateReadTime(blog.content)} min</P>
      </div>
    </div>
  );
}
