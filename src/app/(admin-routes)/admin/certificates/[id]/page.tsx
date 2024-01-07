import { upsertCertificateAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
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
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {certificate ? "Edit" : "Create"} a Certificate
        </h1>
        <form action={upsertCertificateAction}>
          <input
            type="hidden"
            id="_id"
            name="_id"
            value={
              certificate
                ? certificate._id.toString()
                : new Types.ObjectId().toString()
            }
          />
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Title
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              defaultValue={certificate?.title}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="link"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Link
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="url"
              name="link"
              id="link"
              placeholder="Link"
              defaultValue={certificate?.link}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Image
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="url"
              name="image"
              id="image"
              placeholder="Image URL"
              defaultValue={certificate?.image}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Description
            </label>
            <textarea
              className="h-24 w-full rounded-xl border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              name="description"
              id="description"
              placeholder="Description"
              defaultValue={certificate?.description}
              required
            />
          </div>
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
