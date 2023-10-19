import clientProm from "@/lib/mongodb";
import { ABOUT_TEXT } from "@/utils/constants";

export default async function About() {
  const connectDB = await clientProm;
  const socialMedias = await connectDB
    .db("personal-website")
    .collection("social-medias")
    .find({})
    .toArray();

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-5 py-32">
      <div className="w-full">
        <h2 className="mb-6 text-7xl font-bold">{ABOUT_TEXT.title}</h2>
        <p
          className="mb-8 text-lg"
          dangerouslySetInnerHTML={{ __html: ABOUT_TEXT.description }}
        ></p>
        <div className="flex items-center gap-4">
          {socialMedias.map((socialMedia) => (
            <a
              key={socialMedia._id.toString()}
              href={socialMedia.url}
              className="p-2 opacity-100 transition-all duration-300 hover:opacity-60"
              target="_blank"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-current text-black"
                dangerouslySetInnerHTML={{
                  __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                }}
              ></svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export const revalidate = 1;
