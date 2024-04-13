"use client";
import { Blog } from "@/types/models";
import MDEditor from "@uiw/react-md-editor";
import { Types } from "mongoose";
import { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import { upsertBlogAction } from "@/actions/upsertActions";
import { HiddenInfo, Input } from "@/app/components/global/ui/input";
import { Button } from "@/app/components/global/ui/button";

export default function EditBlogForm({ blog }: Readonly<{ blog?: Blog }>) {
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setTags(blog?.tags.map((tag) => tag) ?? []);
    setContent(blog?.content ?? "");
  }, [blog?.tags, blog?.content]);

  return (
    <form action={upsertBlogAction}>
      <HiddenInfo
        name="_id"
        value={blog ? blog._id.toString() : new Types.ObjectId().toString()}
      />
      <HiddenInfo name="tags" value={tags.join(" ")} />
      <HiddenInfo name="content" value={content} />
      <Input
        name="title"
        type="text"
        label="Title"
        placeholder="Title"
        defaultValue={blog?.title}
        required
      />
      <Input
        name="link"
        type="text"
        label="Link"
        placeholder="Link"
        defaultValue={blog?.link}
        required
      />
      <div className="mb-4">
        <label
          htmlFor="link"
          className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
        >
          Tags
        </label>
        <div className="mb-2 flex w-full items-center justify-between">
          <input
            className="w-full rounded-l-full border border-white bg-transparent px-5 py-3 text-base text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
            style={{ WebkitTextFillColor: "#fff" }}
            type="text"
            name="tag"
            id="tag"
            placeholder="Insert a tag"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              const newTag: HTMLInputElement = document.getElementById(
                "tag",
              ) as HTMLInputElement;
              setTags([...tags, newTag.value]);
              newTag.value = "";
            }}
            variant={"default"}
          >
            Add
          </Button>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <Button
              key={tag}
              onClick={() => {
                setTags(tags.filter((_, index) => index !== i));
              }}
              variant="default"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <MDEditor
        value={content}
        onChange={(e) => setContent(e!)}
        height={420}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <div className="mt-10">
        <Button type="submit">{blog ? "Save" : "Create"}</Button>
      </div>
    </form>
  );
}
