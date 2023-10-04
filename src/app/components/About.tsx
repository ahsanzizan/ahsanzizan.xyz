import Image from "next/image";

const title: string = "Hey There! Welcome to My Personal Website.";
const description: string =
  "I am Ahsan Awadullah Azizan, but you can simply call me Ahsan. Currently, I am pursuing my studies at SMK Telkom Malang, specializing in software engineering. My areas of interest revolve around software engineering and data science. I have a passion for exploring and learning new things, especially when they are related to technology. This curiosity has greatly enhanced my ability to comprehend various subjects.";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-5 py-32">
      <div className="w-full">
        <h2 className="mb-6 text-7xl font-bold">{title}</h2>
        <p className="mb-8 text-lg">{description}</p>
        <div className="flex items-center gap-8">
          <a href="https://instagram.com/ahsanzizan"></a>
          <a href="https://www.youtube.com/@jetto_curvarine"></a>
          <a href="https://www.twitter."></a>
        </div>
      </div>
    </section>
  );
}
