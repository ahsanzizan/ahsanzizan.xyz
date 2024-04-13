import { SectionContainer } from "@/app/components/global/ui/container";
import { H1 } from "@/app/components/global/ui/text";
import ProjectModel from "@/models/Project.model";
import { Project } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { isInteger } from "@/utils/utilities";
import { Model } from "mongoose";
import Image from "next/image";
import { default as NextLink } from "next/link";
import PaginatedNavigator from "../../components/global/PaginatedNavigator";
import cn from "@/lib/clsx";
import { ProjectFigure } from "@/app/components/global/ui/project-figure";

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
    <SectionContainer id="works">
      <div
        className={cn("mb-5 flex w-full items-center justify-between md:mb-12")}
      >
        <H1>All Curated Works</H1>
        <PaginatedNavigator segment="works" maxPage={maxPage} page={page} />
      </div>
      <div className="flex w-full flex-col gap-5">
        {projects.map((project) => (
          <ProjectFigure
            key={project._id.toString()}
            title={project.title}
            description={project.description}
            image={project.image}
            href={"/works/" + project.link}
            className="h-[312px] w-full md:h-[512px]"
            descriptionThreshold={170}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export const revalidate = 0;