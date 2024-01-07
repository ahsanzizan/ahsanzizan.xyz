import { upsertExperienceAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getExperienceById } from "@/database/experience.query";
import { getFormattedDate } from "@/utils/utilityFunctions";
import { Types } from "mongoose";

export default async function EditExperience({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const experience = await getExperienceById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {experience ? "Edit" : "Create"} an Experience
        </h1>
        <form action={upsertExperienceAction}>
          <input
            type="hidden"
            id="_id"
            name="_id"
            value={
              experience
                ? experience._id.toString()
                : new Types.ObjectId().toString()
            }
          />
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
              defaultValue={experience?.title!}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Description
            </label>
            <textarea
              className="h-24 w-full rounded-xl border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              name="description"
              id="description"
              placeholder="Description"
              defaultValue={experience?.description}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Start Date
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="date"
              name="startDate"
              id="startDate"
              defaultValue={getFormattedDate(new Date(experience?.startDate))}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              End Date
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="date"
              name="endDate"
              id="endDate"
              defaultValue={getFormattedDate(
                experience?.endDate ? new Date(experience.endDate) : undefined,
              )}
            />
          </div>
          <div className="mt-10">
            <StandardFormButton type="submit">
              {experience ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
