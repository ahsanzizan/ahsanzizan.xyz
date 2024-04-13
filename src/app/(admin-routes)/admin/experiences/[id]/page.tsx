import { upsertExperienceAction } from "@/actions/upsertActions";
import { Button } from "@/app/components/global/ui/button";
import {
  DateInput,
  HiddenInfo,
  Input,
  TextAreaInput,
} from "@/app/components/global/ui/input";
import { getExperienceById } from "@/database/experience.query";
import { getFormattedDate } from "@/utils/utilities";
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
          <Input
            type="text"
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
          />
          <div className="mt-10">
            <Button type="submit">{experience ? "Save" : "Create"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
