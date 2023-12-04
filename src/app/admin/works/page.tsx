import { getAllProjects } from "@/lib/queries/project.query";
import WorksTable from "./components/WorksTable";

export default async function Works() {
  const works = JSON.parse(JSON.stringify(await getAllProjects()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <WorksTable works={works} />
      </div>
    </section>
  );
}

export const revalidate = 0;