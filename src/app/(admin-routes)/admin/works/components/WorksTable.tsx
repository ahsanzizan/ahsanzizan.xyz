"use client";
import { deleteProjectAction } from "@/actions";
import { Button, Link } from "@/app/components/global/ui/button";
import { H2, H3 } from "@/app/components/global/ui/text";
import { Project } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function WorksTable({ works }: Readonly<{ works: Project[] }>) {
  const router = useRouter();

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <H3>Projects</H3>
        <Link href={"/admin/works/new"}>New</Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {works.map((project) => (
          <div
            key={project.id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <H2>{project.title}</H2>
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
              <Button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteProjectAction(project.id.toString()).then(() => {
                    toast.success("Successfully deleted a work", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </Button>
              <Link href={"/admin/works/" + project.id.toString()}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
