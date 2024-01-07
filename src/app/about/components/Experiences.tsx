import { getAllExperiences } from "@/database/experience.query";
import { getMonthName } from "@/utils/utilityFunctions";

export default async function Experiences() {
  const experiences = await getAllExperiences();

  return (
    <section id="experiences" className="mb-32 w-full py-12">
      <h1 className="text-4xl leading-snug drop-shadow-glow md:text-7xl">
        Experiences
      </h1>
      <div className="flex w-full flex-col divide-y divide-white">
        {experiences.map((experience) => (
          <div
            key={experience._id.toString()}
            className="group flex w-full flex-col gap-4 py-4 transition-all duration-500 md:py-10"
          >
            <h2 className="text-xl drop-shadow-glow md:text-4xl">
              {experience.title}
            </h2>
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
            <p className="text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
