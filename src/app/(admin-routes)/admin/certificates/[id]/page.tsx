import { upsertCertificateAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getCertificateById } from "@/database/cerficate.query";
import { Types } from "mongoose";
import {
  HiddenInfo,
  TextAreaInput,
  TextInput,
  URLInput,
} from "../../components/shared/Inputs";

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
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {certificate ? "Edit" : "Create"} a Certificate
        </h1>
        <form action={upsertCertificateAction}>
          <HiddenInfo
            name="_id"
            value={
              certificate
                ? certificate._id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <TextInput
            name="title"
            label="Title"
            placeholder="Title"
            defaultValue={certificate?.title}
            required
          />
          <URLInput
            name="url"
            label="URL"
            placeholder="URL"
            defaultValue={certificate?.url}
            required
            last
          />
          <URLInput
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
            last
          />
          <div className="mt-10">
            <StandardFormButton type="submit">
              {certificate ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}
