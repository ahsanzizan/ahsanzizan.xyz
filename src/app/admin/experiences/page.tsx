import ExperiencesTable from "./components/ExperiencesTable";
import { getAllExperiences } from "@/lib/queries/experience.query";

export default async function Works() {
  const experiences = JSON.parse(JSON.stringify(await getAllExperiences()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <ExperiencesTable experiences={experiences} />
      </div>
    </section>
  );
}

export const revalidate = 0;
