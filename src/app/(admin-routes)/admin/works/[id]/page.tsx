import { upsertProjectAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getProjectById } from "@/database/project.query";
import { Types } from "mongoose";
import {
  HiddenInfo,
  TextAreaInput,
  TextInput,
} from "../../components/shared/Inputs";

export default async function EditWork({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const project = await getProjectById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {project ? "Edit" : "Create"} a Project
        </h1>
        <form action={upsertProjectAction}>
          <HiddenInfo
            name="_id"
            value={
              project ? project._id.toString() : new Types.ObjectId().toString()
            }
          />
          <TextInput
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue={project?.title}
            required
          />
          <TextInput
            name="url"
            label="URL"
            placeholder="URL"
            defaultValue={project?.url}
            required
          />
          <TextInput
            name="image"
            label="Image"
            placeholder="Image"
            defaultValue={project?.image}
            required
          />
          <TextInput
            name="link"
            label="Link"
            placeholder="Link"
            defaultValue={project?.link}
            required
          />
          <TextAreaInput
            name="description"
            label="Description"
            placeholder="Description"
            defaultValue={project?.description}
            required
            last
          />
          <div className="mt-10">
            <StandardFormButton type="submit">
              {project ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
