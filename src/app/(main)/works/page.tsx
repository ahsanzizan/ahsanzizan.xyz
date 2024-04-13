import ProjectModel from "@/models/Project.model";
import { Project } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { isInteger } from "@/utils/utilities";
import { Model } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/parts/Footer";
import Wrapper from "../components/global/Wrapper";
import PaginatedNavigator from "../components/global/PaginatedNavigator";

export default async function Works({
  searchParams,
}: Readonly<{ searchParams: { [key: string]: string | string[] } }>) {
  const page = isInteger(searchParams?.page as unknown as string)
    ? parseInt(searchParams?.page as unknown as string)
    : 1;
  const { datas: projects, maxPage }: { datas: Project[]; maxPage: number } =
    await getPaginatedResult({
      model: ProjectModel as Model<Project>,
      perPage: 3,
      page,
    });

  return (
    <Wrapper>
      <main className="mx-auto w-full max-w-[1440px] px-5 py-24">
        <section id="works" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">
              All Selected Works
            </h4>
            <PaginatedNavigator segment="works" maxPage={maxPage} page={page} />
          </div>
          <div className="flex w-full flex-col divide-y divide-white">
            {projects.map((project) => (
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
