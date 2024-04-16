import { upsertCertificateAction } from "@/actions/upsertActions";
import { Button } from "@/app/components/global/ui/button";
import {
  HiddenInfo,
  Input,
  TextAreaInput,
} from "@/app/components/global/ui/input";
import { getCertificateById } from "@/database/cerficate.query";
import { Types } from "mongoose";

export default async function EditCertificate({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const certificate = JSON.parse(
    JSON.stringify(await getCertificateById(params.id)),
  );

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {certificate ? "Edit" : "Create"} a Certificate
        </h1>
        <form action={upsertCertificateAction}>
          <HiddenInfo
            name="_id"
            value={
              certificate
                ? certificate.id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <Input
            type="text"
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue={certificate?.title}
            required
          />
          <Input
            type="url"
            name="url"
            label="URL"
            placeholder="URL"
            defaultValue={certificate?.url}
            required
          />
          <Input
            type="url"
            name="image"
            label="Image"
            placeholder="Image"
            defaultValue={certificate?.image}
            required
          />
          <TextAreaInput
            name="description"
            label="Description"
            placeholder="Description"
            defaultValue={certificate?.description}
            required
          />
          <div className="mt-10">
            <Button type="submit">{certificate ? "Save" : "Create"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
