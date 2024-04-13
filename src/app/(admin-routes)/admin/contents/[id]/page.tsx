import { upsertContentAction } from "@/actions/upsertActions";
import { Button } from "@/app/components/global/ui/button";
import { HiddenInfo, Input } from "@/app/components/global/ui/input";
import { H1 } from "@/app/components/global/ui/text";
import { getContentById } from "@/database/content.query";
import { Types } from "mongoose";

export default async function EditContent({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const content = await getContentById(params.id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-4xl rounded p-6">
        <H1>{content ? "Edit" : "Create"} a Content</H1>
        <form action={upsertContentAction}>
          <HiddenInfo
            name="_id"
            value={
              content ? content._id.toString() : new Types.ObjectId().toString()
            }
          />
          <Input
            type="text"
            name="key"
            label="Name"
            placeholder="Key"
            defaultValue={content?.key}
            required
          />
          <Input
            type="text"
            name="content"
            label="Content"
            placeholder="Content"
            defaultValue={content?.content}
            required
          />
          <div className="mt-10">
            <Button type="submit">{content ? "Save" : "Create"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
