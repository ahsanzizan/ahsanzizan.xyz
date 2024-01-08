import { upsertContentAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getContentById } from "@/database/content.query";
import { Types } from "mongoose";
import { HiddenInfo, TextInput } from "../../components/shared/Inputs";

export default async function EditContent({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const content = await getContentById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {content ? "Edit" : "Create"} a Content
        </h1>
        <form action={upsertContentAction}>
          <HiddenInfo
            name="_id"
            value={
              content ? content._id.toString() : new Types.ObjectId().toString()
            }
          />
          <TextInput
            name="key"
            label="Name"
            placeholder="Key"
            defaultValue={content?.key}
            required
          />
          <TextInput
            name="content"
            label="Content"
            placeholder="Content"
            defaultValue={content?.content}
            required
            last
          />
          <div className="mt-10">
            <StandardFormButton type="submit">
              {content ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
