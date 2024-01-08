import { upsertSocialMediaAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getSocialMediaById } from "@/database/socialMedia.query";
import { Types } from "mongoose";
import {
  HiddenInfo,
  TextInput,
  URLInput,
} from "../../components/shared/Inputs";

export default async function EditSocialMedia({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const socialMedia = await getSocialMediaById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {socialMedia ? "Edit" : "Create"} a Social Media
        </h1>
        <form action={upsertSocialMediaAction}>
          <HiddenInfo
            name="_id"
            value={
              socialMedia
                ? socialMedia._id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <TextInput
            name="name"
            label="Name"
            placeholder="Name"
            defaultValue={socialMedia?.name}
            required
          />
          <TextInput
            name="svgPath"
            label="SVG Path"
            placeholder="SVG Path"
            defaultValue={socialMedia?.svgPath}
            required
          />
          <URLInput
            name="url"
            label="URL"
            placeholder="URL"
            defaultValue={socialMedia?.url}
            required
            last
          />
          <div className="mt-10">
            <StandardFormButton type="submit">
              {socialMedia ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
