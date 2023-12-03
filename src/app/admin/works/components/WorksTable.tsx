"use client";
import { Project } from "@/models/Project.model";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function WorksTable({ works }: { works: Project[] }) {
  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Projects</h4>
        <Link
          href={"/admin/works/new"}
          className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
        >
          New{" "}
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {works.map((project, i) => (
          <div
            key={i}
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
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  //   deleteSocialMediaAction(socialMedia._id.toString()).then(
                  //     () => {
                  //       toast.success("Successfully deleted a social media", {
                  //         id: toastId,
                  //       });
                  //       router.refresh();
                  //     },
                  //   );
                }}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Delete
              </button>
              <Link
                href={"/admin/works/" + project._id.toString()}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
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
