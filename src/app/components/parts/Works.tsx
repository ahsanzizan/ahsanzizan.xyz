import cn from "@/lib/clsx";
import PlayIcon from "../global/icons/Play";
import { Link } from "../global/ui/button";
import { SectionContainer } from "../global/ui/container";
import { ProjectFigure } from "../global/ui/project-figure";
import { H1 } from "../global/ui/text";
import { getProjects } from "@/database/project.query";

export default async function Works() {
  const projects = await getProjects({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <SectionContainer id="works">
      <div
        className={cn(
          "mb-5 flex w-full flex-col items-center justify-center gap-5 md:mb-12",
        )}
      >
        <H1 className="text-center">Curated List of Works</H1>
        <Link href={"/works"} variant={"default"}>
          See more{" "}
          <PlayIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:fill-white" />
        </Link>
      </div>
      <div className={cn("flex w-full flex-col justify-center gap-12")}>
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-12 md:flex-row md:gap-0",
          )}
        >
          <ProjectFigure
            title={projects[0].title}
            description={projects[0].description}
            image={projects[0].image}
            href={"/works/" + projects[0].link}
            className="h-[312px] w-full md:w-[48%]"
          />
          <ProjectFigure
            title={projects[1].title}
            description={projects[1].description}
            image={projects[1].image}
            href={"/works/" + projects[1].link}
            className="h-[312px] w-full md:w-[48%]"
          />
        </div>
        <ProjectFigure
          title={projects[2].title}
          description={projects[2].description}
          image={projects[2].image}
          href={"/works/" + projects[2].link}
          className="h-[312px] w-full"
        />
      </div>
    </SectionContainer>
  );
}
