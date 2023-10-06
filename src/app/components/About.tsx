import clientProm from "@/lib/mongodb";

const title: string = "Hey There! Welcome to My Personal Website.";
const description: string =
  "I am Ahsan Awadullah Azizan, or simply Ahsan. Currently, I am immersed in my studies at <a href='https://smktelkom-mlg.sch.id/'>SMK Telkom Malang</a>, specializing in software engineering. My keen interest lies at the intersection of software engineering and data science, areas where I find constant inspiration to explore and learn. My passion for technology fuels my curiosity, enhancing my ability to comprehend diverse subjects. Originating from my journey in game development, I have hands-on experience creating 2D games using <a href='https://unity.com/'>Unity</a>, although none have been published as of yet.";

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
        <h2 className="mb-6 text-7xl font-bold">{title}</h2>
        <p
          className="mb-8 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
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