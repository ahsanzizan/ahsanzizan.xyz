"use client";
import { deleteContentAction } from "@/actions";
import { Button, Link } from "@/app/components/global/ui/button";
import { H3 } from "@/app/components/global/ui/text";
import { Content } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ContentsTable({
  contents,
}: Readonly<{ contents: Content[] }>) {
  const router = useRouter();
  const simplifiedContents: Content[] = JSON.parse(JSON.stringify(contents));

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <H3>Contents</H3>
        <Link href={"/admin/contents/new"} variant={"default"}>
          New
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedContents.map((content, i) => (
          <div
            key={content.id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {content.key}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteContentAction(content.id.toString()).then(() => {
                    toast.success("Successfully deleted a content", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
                variant={"default"}
              >
                Delete
              </Button>
              <Link
                href={"/admin/contents/" + content.id.toString()}
                variant={"inverse"}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
