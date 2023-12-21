import { getAllProjects } from "@/database/project.query";
import Image from "next/image";
import Link from "next/link";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";

export default async function Works() {
  const projects = await getAllProjects();

  return (
    <>
      <section id="works" className="mb-32 w-full py-12">
        <div className="mb-5 flex w-full items-center justify-between md:mb-12">
          <h4 className="text-lg drop-shadow-glow md:text-2xl">Works</h4>
          <StandardLinkButton href={"/works"}>See More</StandardLinkButton>
        </div>
        <div className="flex w-full flex-col divide-y divide-white">
          {projects.slice(0, 3).map((project, i) => (
            <Link
              key={i}
              href={`/works/${project.link}`}
              className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 hover:px-4 md:py-10 md:hover:px-7"
            >
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {project.title}
              </h2>
              <Image
                src={project.image}
                alt="Project Image"
                width={256}
                height={164}
                className="relative h-20 w-32 rounded-xl object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 md:h-40 md:w-64"
                unoptimized
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
