"use client";
import { upsertBlogAction } from "@/actions/admin";
import {
  StandardButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { Blog } from "@/types/models";
import MDEditor from "@uiw/react-md-editor";
import { Types } from "mongoose";
import { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";

export default function EditBlogForm({ blog }: Readonly<{ blog?: Blog }>) {
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setTags(blog?.tags.map((tag) => tag) ?? []);
    setContent(blog?.content ?? "");
  }, [blog?.tags, blog?.content]);

  return (
    <form action={upsertBlogAction}>
      <input
        type="hidden"
        id="_id"
        name="_id"
        value={blog ? blog._id.toString() : new Types.ObjectId().toString()}
      />
      <input type="hidden" id="tags" name="tags" value={tags.join(" ")} />
      <input type="hidden" id="content" name="content" value={content} />
      <div className="mb-4">
        <label
          htmlFor="title"
          className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
        >
          Title
        </label>
        <input
          className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
          style={{ WebkitTextFillColor: "#fff" }}
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          defaultValue={blog?.title}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="link"
          className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
        >
          Link
        </label>
        <input
          className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
          style={{ WebkitTextFillColor: "#fff" }}
          type="text"
          name="link"
          id="link"
          placeholder="Blog Link"
          defaultValue={blog?.link}
          required
        />
      </div>
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
          <StandardButton
            onClick={(e) => {
              e.preventDefault();
              const newTag: HTMLInputElement = document.getElementById(
                "tag",
              ) as HTMLInputElement;
              setTags([...tags, newTag.value]);
              newTag.value = "";
            }}
          >
            Add
          </StandardButton>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <StandardButton
              key={tag}
              onClick={() => {
                setTags(tags.filter((_, index) => index !== i));
              }}
            >
              {tag}
            </StandardButton>
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
        <StandardFormButton type="submit">
          {blog ? "Save" : "Create"}
        </StandardFormButton>
      </div>
    </form>
  );
}
