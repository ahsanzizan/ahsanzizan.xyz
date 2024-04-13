"use client";
import { deleteExperienceAction } from "@/actions/deleteActions";
import { Button, Link } from "@/app/components/global/ui/button";
import { H3 } from "@/app/components/global/ui/text";
import { Experience } from "@/types/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ExperiencesTable({
  experiences,
}: Readonly<{
  experiences: Experience[];
}>) {
  const router = useRouter();

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <H3>Projects</H3>
        <Link href={"/admin/experiences/new"}>New</Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {experiences.map((experience) => (
          <div
            key={experience._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {experience.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteExperienceAction(experience._id.toString()).then(() => {
                    toast.success("Successfully deleted an experience", {
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
                href={"/admin/experiences/" + experience._id.toString()}
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
