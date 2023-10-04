import Image from "next/image";

const title: string = "Hey There!";
const description: string =
  "I am Ahsan Awadullah Azizan, but you can simply call me Ahsan. Currently, I am pursuing my studies at SMK Telkom Malang, specializing in software engineering. My areas of interest revolve around software engineering and data science. I have a passion for exploring and learning new things, especially when they are related to technology. This curiosity has greatly enhanced my ability to comprehend various subjects.";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-5 py-32">
      <div className="flex w-full items-center justify-between gap-24">
        <div className="w-1/2">
          <h2 className="mb-6 text-7xl font-semibold">{title}</h2>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="h-full w-1/2">
          <Image
            src={"/me.jpg"}
            width={9}
            height={16}
            alt="Picture of me"
            className="aspect-[9/16] h-full w-auto object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
