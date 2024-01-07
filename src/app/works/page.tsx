import { getAllProjects } from "@/database/project.query";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Parts/Footer";
import Wrapper from "../components/global/Wrapper";

export default async function Works() {
  const projects = await getAllProjects();

  return (
    <Wrapper>
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[200px]">
        <section id="works" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">
              All Selected Works
            </h4>
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {projects.map((project, i) => (
              <Link
                key={project._id.toString()}
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
        <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
