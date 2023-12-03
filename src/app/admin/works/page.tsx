import { getAllProjects } from "@/lib/queries/project.query";
import WorksTable from "./components/WorksTable";

export default async function Works() {
  const works = JSON.parse(JSON.stringify(await getAllProjects()));

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
      <section id="home" className="mb-32 w-full py-12">
        <div className="block">
          <WorksTable works={works} />
        </div>
      </section>
    </main>
  );
}
