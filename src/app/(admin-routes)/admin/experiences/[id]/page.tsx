import { upsertExperienceAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getExperienceById } from "@/database/experience.query";
import { getFormattedDate } from "@/utils/utilityFunctions";
import { Types } from "mongoose";
import {
  DateInput,
  HiddenInfo,
  TextAreaInput,
  TextInput,
} from "../../components/shared/Inputs";

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
          <HiddenInfo
            name="_id"
            value={
              experience
                ? experience._id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <TextInput
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue={experience?.title!}
            required
          />
          <TextAreaInput
            name="description"
            label="Description"
            placeholder="Description"
            defaultValue={experience?.description}
            required
          />
          <DateInput
            name="startDate"
            label="Start Date"
            defaultValue={getFormattedDate(new Date(experience?.startDate))}
            required
          />
          <DateInput
            name="endDate"
            label="End Date"
            defaultValue={getFormattedDate(
              experience?.endDate ? new Date(experience.endDate) : undefined,
            )}
            last
          />
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
