import { getAllProjects } from "@/database/project.query";
import Image from "next/image";
import { StandardLinkButton, VisitWorkButton } from "../global/Buttons";
import { truncateString } from "@/utils/utilityFunctions";

export default async function Works() {
  const projects = await getAllProjects();

  return (
    <section id="works" className="mb-32 w-full py-12">
      <div className="mb-5 flex w-full items-center justify-between md:mb-12">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Works</h4>
        <StandardLinkButton href={"/works"}>See More</StandardLinkButton>
      </div>
      <div className="flex w-full flex-col">
        {projects.slice(0, 3).map((project, i) => {
          const isOdd = i % 2 !== 0;

          return (
            <div
              key={project._id.toString()}
              className={`flex w-full flex-col items-center gap-12 overflow-hidden py-4 md:flex-row md:py-10 ${
                isOdd ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt="Project Image"
                  width={256}
                  height={164}
                  className="relative h-96 w-full rounded-xl object-cover"
                  unoptimized
                />
              </div>
              <div
                className={`w-full md:w-1/2 ${
                  isOdd ? "text-right" : "text-left"
                }`}
              >
                <h2 className="mb-7 text-xl drop-shadow-glow md:text-4xl">
                  0{i + 1}
                </h2>
                <h2 className="mb-7 text-xl drop-shadow-glow md:text-4xl">
                  {project.title}
                </h2>
                <p className="mb-7 text-neutral-400">
                  {truncateString(project.description, 220)}
                </p>
                <VisitWorkButton href={"/works/" + project.link}>
                  Visit
                </VisitWorkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
