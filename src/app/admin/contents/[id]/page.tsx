import { upsertContentAction } from "../../actions";
import BackButton from "@/app/components/Buttons";
import { Types } from "mongoose";
import { getContentById } from "@/database/content.query";

export default async function EditContent({
  params,
}: {
  params: { id: string };
}) {
  const content = await getContentById(params.id);

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center gap-2">
        <div className="w-full max-w-lg rounded p-6">
          <BackButton />
          <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
            {content ? "Edit" : "Create"} a Content
          </h1>
          <form action={upsertContentAction}>
            <input
              type="hidden"
              id="_id"
              name="_id"
              value={
                content
                  ? content._id.toString()
                  : new Types.ObjectId().toString()
              }
            />
            <div className="mb-4">
              <label
                htmlFor="key"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                Name
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="key"
                id="key"
                placeholder="Key"
                defaultValue={content?.key}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                Content
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="content"
                id="content"
                placeholder="Content"
                defaultValue={content?.content}
                required
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2 text-center text-base text-black transition-all duration-500 hover:drop-shadow-glow disabled:bg-neutral-400 md:px-[22px] md:py-[10px] md:text-lg"
              >
                {content ? "Save" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
