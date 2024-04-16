import { upsertSocialMediaAction } from "@/actions";
import { Button } from "@/app/components/global/ui/button";
import { HiddenInfo, Input } from "@/app/components/global/ui/input";
import { H1 } from "@/app/components/global/ui/text";
import { getSocialMediaById } from "@/database";
import { Types } from "mongoose";

export default async function EditSocialMedia({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const socialMedia = await getSocialMediaById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-4xl rounded p-6">
        <H1>{socialMedia ? "Edit" : "Create"} a Social Media</H1>
        <form action={upsertSocialMediaAction}>
          <HiddenInfo
            name="_id"
            value={
              socialMedia
                ? socialMedia.id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Name"
            defaultValue={socialMedia?.name}
            required
          />
          <Input
            type="text"
            name="svgPath"
            label="SVG Path"
            placeholder="SVG Path"
            defaultValue={socialMedia?.svgPath}
            required
          />
          <Input
            type="url"
            name="url"
            label="URL"
            placeholder="URL"
            defaultValue={socialMedia?.url}
            required
          />
          <div className="mt-10">
            <Button type="submit">{socialMedia ? "Save" : "Create"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
