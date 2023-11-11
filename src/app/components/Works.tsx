import clientProm from "@/lib/mongodb";
import Image from "next/image";

export default async function Works() {
  const connectDB = await clientProm;
  const projects = await connectDB
    .db("personal-website")
    .collection("projects")
    .find({})
    .toArray();

  return (
    <section id="Works" className="mx-auto max-w-5xl px-5 py-32">
      <h2 className="mb-6 text-7xl font-bold">Selected Works</h2>
      <div className="flex flex-col divide-y-2 divide-black">
        {projects.map((project) => (
          <a
            key={project._id.toString()}
            href={project.url}
            className="group flex w-full items-center justify-between py-8 transition-all duration-300 hover:bg-black hover:px-3 hover:text-white"
            target="_blank"
          >
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              width={30}
              height={30}
            >
              <path
                d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                fill="#000"
                className="group-hover:fill-white"
              ></path>
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}

export const revalidate = 1;
