import { getProjects } from "@/database";
import WorksTable from "./components/WorksTable";

export default async function Works() {
  const works = JSON.parse(JSON.stringify(await getProjects()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <div className="block">
        <WorksTable works={works} />
      </div>
    </section>
  );
}
