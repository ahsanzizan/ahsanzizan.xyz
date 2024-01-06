"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteContentAction } from "../actions";
import {
  StandardButton,
  StandardLinkButton,
} from "@/app/components/global/Buttons";
import { Content } from "@/types/models";

export default function ContentsTable({ contents }: { contents: Content[] }) {
  const router = useRouter();
  const simplifiedContents: Content[] = JSON.parse(JSON.stringify(contents));

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Contents</h4>
        <StandardLinkButton href={"/admin/contents/new"}>
          New
        </StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedContents.map((content, i) => (
          <div
            key={i}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {content.key}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteContentAction(content._id.toString()).then(() => {
                    toast.success("Successfully deleted a content", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/contents/" + content._id.toString()}
              >
                Edit
              </StandardLinkButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
