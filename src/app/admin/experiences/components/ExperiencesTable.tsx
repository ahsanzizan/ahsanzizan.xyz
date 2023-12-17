"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { deleteExperienceAction } from "../../actions";
import { useRouter } from "next/navigation";
import { Experience } from "@/models/Experience.model";
import { StandardButton, StandardLinkButton } from "@/app/components/global/Buttons";

export default function ExperiencesTable({
  experiences,
}: {
  experiences: Experience[];
}) {
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
        {experiences.map((experience, i) => (
          <div
            key={i}
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
