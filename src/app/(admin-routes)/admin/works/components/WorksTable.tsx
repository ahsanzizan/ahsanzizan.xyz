"use client";
import { deleteProjectAction } from "@/actions/deleteActions";
import {
  StandardButton,
  StandardLinkButton,
} from "@/app/components/global/Buttons";
import { Project } from "@/types/models";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function WorksTable({ works }: Readonly<{ works: Project[] }>) {
  const router = useRouter();

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Projects</h4>
        <StandardLinkButton href={"/admin/works/new"}>New</StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {works.map((project) => (
          <div
            key={project._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {project.title}
              </h2>
              <Image
                src={project.image}
                alt="Project Image"
                width={256}
                height={164}
                className="relative h-20 w-32 rounded-xl object-cover opacity-0 transition-all duration-500 md:h-40 md:w-64"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-2">
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteProjectAction(project._id.toString()).then(() => {
                    toast.success("Successfully deleted a work", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/works/" + project._id.toString()}
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
