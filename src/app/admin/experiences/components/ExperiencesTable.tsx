"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { deleteExperienceAction } from "../../actions";
import { useRouter } from "next/navigation";
import { Experience } from "@/models/Experience.model";

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
        <Link
          href={"/admin/experiences/new"}
          className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
        >
          New{" "}
        </Link>
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
              <button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteExperienceAction(experience._id.toString()).then(() => {
                    toast.success("Successfully deleted an experience", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
                className="group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                Delete
              </button>
              <Link
                href={"/admin/experiences/" + experience._id.toString()}
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
