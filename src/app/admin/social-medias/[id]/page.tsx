import { getSocialMediaById } from "@/lib/queries/socialMedia.query";
import { upsertSocialMediaAction } from "../../actions";
import BackButton from "@/app/components/BackButton";
import { Types } from "mongoose";

export default async function EditSocialMedia({
  params,
}: {
  params: { id: string };
}) {
  const socialMedia = await getSocialMediaById(params.id);

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center gap-2">
        <div className="w-full max-w-lg rounded p-6">
          <BackButton />
          <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
            {socialMedia ? "Edit" : "Create"} a Social Media
          </h1>
          <form action={upsertSocialMediaAction}>
            <input
              type="hidden"
              id="_id"
              name="_id"
              value={
                socialMedia
                  ? socialMedia._id.toString()
                  : new Types.ObjectId().toString()
              }
            />
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                Name
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                defaultValue={socialMedia?.name}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="svgPath"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                SVG Path
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="svgPath"
                id="svgPath"
                placeholder="SVG Path"
                defaultValue={socialMedia?.svgPath}
                required
              />
            </div>
            <div>
              <label
                htmlFor="url"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                URL
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="url"
                name="url"
                id="url"
                placeholder="URL"
                defaultValue={socialMedia?.url}
                required
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2 text-center text-base text-black transition-all duration-500 hover:drop-shadow-glow disabled:bg-neutral-400 md:px-[22px] md:py-[10px] md:text-lg"
              >
                {socialMedia ? "Save" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
