import { SectionContainer } from "@/app/components/global/ui/container";
import { ProjectFigure } from "@/app/components/global/ui/project-figure";
import { H1 } from "@/app/components/global/ui/text";
import cn from "@/lib/clsx";
import ProjectModel from "@/models/Project.model";
import { Project } from "@/types/models";
import { getPaginatedResult } from "@/utils/paginator";
import { isInteger } from "@/utils/utilities";
import { Model } from "mongoose";
import PaginatedNavigator from "../../components/global/ui/paginated-navigator";

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
        className={cn(
          "mb-5 flex w-full flex-col justify-between md:mb-12 md:flex-row md:items-center",
        )}
      >
        <H1>Curated Works</H1>
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
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export const revalidate = 0;
