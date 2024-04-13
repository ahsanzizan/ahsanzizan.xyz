import { upsertProjectAction } from "@/actions/upsertActions";
import { Button } from "@/app/components/global/ui/button";
import {
  HiddenInfo,
  Input,
  TextAreaInput,
} from "@/app/components/global/ui/input";
import { H1 } from "@/app/components/global/ui/text";
import { getProjectById } from "@/database/project.query";
import { Types } from "mongoose";

export default async function EditWork({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const project = await getProjectById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <H1>{project ? "Edit" : "Create"} a Project</H1>
        <form action={upsertProjectAction}>
          <HiddenInfo
            name="_id"
            value={
              project ? project._id.toString() : new Types.ObjectId().toString()
            }
          />
          <Input
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue={project?.title}
            required
          />
          <Input
            name="url"
            label="URL"
            type="url"
            placeholder="URL"
            defaultValue={project?.url}
            required
          />
          <Input
            name="image"
            label="Image"
            type="url"
            placeholder="Image"
            defaultValue={project?.image}
            required
          />
          <Input
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
          />
          <div className="mt-10">
            <Button type="submit">{project ? "Save" : "Create"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
