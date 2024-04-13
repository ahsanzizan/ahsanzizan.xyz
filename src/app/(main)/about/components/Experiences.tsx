import PortalIcon from "@/app/components/global/icons/Portal";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1, H4, P } from "@/app/components/global/ui/text";
import { getAllExperiences } from "@/database/experience.query";
import cn from "@/lib/clsx";
import { getMonthName } from "@/utils/utilities";

export default async function Experiences() {
  const experiences = await getAllExperiences();

  return (
    <SectionContainer id="experiences">
      <div className={cn("relative flex flex-col justify-between lg:flex-row")}>
        <div
          className={cn(
            "mb-[42px] w-full lg:sticky lg:top-[6em] lg:mb-0 lg:h-[170px] lg:w-[45%] lg:self-start",
          )}
        >
          <H1>My Experiences</H1>
        </div>
        <div
          className={cn(
            "flex w-full flex-col divide-y divide-white rounded-full lg:w-1/2",
          )}
        >
          {experiences.map((experience) => {
            return (
              <div
                key={experience.title}
                className={cn("flex w-full py-5 lg:justify-between")}
              >
                <div>
                  <H4 className="mb-[14px] flex items-center gap-1">
                    {experience.title}
                    <PortalIcon
                      className={cn("animate-spin [animation-duration:5s]")}
                    />
                  </H4>
                  <dl className="mb-2">
                    <dd className="text-base font-medium leading-6">
                      <time>
                        {getMonthName(experience.startDate.getMonth())}{" "}
                        {experience.startDate.getFullYear()} -{" "}
                        {experience.endDate
                          ? getMonthName(experience.endDate?.getMonth())
                          : "Present"}{" "}
                        {experience.endDate?.getFullYear()}
                      </time>
                    </dd>
                  </dl>
                  <P>{experience.description}</P>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
