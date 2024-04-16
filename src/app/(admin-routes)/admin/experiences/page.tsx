import { getAllExperiences } from "@/database";
import ExperiencesTable from "./components/ExperiencesTable";

export default async function Experiences() {
  const experiences = JSON.parse(JSON.stringify(await getAllExperiences()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <ExperiencesTable experiences={experiences} />
      </div>
    </section>
  );
}
