"use client";
import { deleteExperienceAction } from "@/actions/deleteActions";
import {
  StandardButton,
  StandardLinkButton,
} from "@/app/components/global/Buttons";
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
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Projects</h4>
        <StandardLinkButton href={"/admin/experiences/new"}>
          New{" "}
        </StandardLinkButton>
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
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteExperienceAction(experience._id.toString()).then(() => {
                    toast.success("Successfully deleted an experience", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/experiences/" + experience._id.toString()}
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
