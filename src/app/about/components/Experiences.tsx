export default function Experiences() {
  return (
    <section id="experiences" className="mb-32 w-full py-12">
      <h1 className="text-4xl leading-snug drop-shadow-glow md:text-7xl">
        Experiences
      </h1>
      <div className="flex w-full flex-col divide-y divide-white">
        <div className="group flex w-full flex-col gap-4 py-4 transition-all duration-500 md:py-10">
          <h2 className="text-xl drop-shadow-glow md:text-4xl">
            Lead Dev Staff | Moklet IT Festival
          </h2>
          <dl className="mb-2">
            <dd className="text-base font-medium leading-6">
              <time>October 2023 - Present</time>
            </dd>
          </dl>
          <p className="text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            In my role as Lead Development Staff at Moklet IT Festival Event, I
            have been instrumental in orchestrating the technical aspects of
            this dynamic and impactful event. My responsibilities revolves
            around coordinating development teams to ensuring the seamless
            execution of digital initiatives.
          </p>
        </div>
        <div className="group flex w-full flex-col gap-4 py-4 transition-all duration-500 md:py-10">
          <h2 className="text-xl drop-shadow-glow md:text-4xl">
            {"Fullstack Developer | Moklet Student Council Web-app Project"}
          </h2>
          <dl className="mb-2">
            <dd className="text-base font-medium leading-6">
              <time>August 2023 - Present</time>
            </dd>
          </dl>
          <p className="text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            Leveraged my expertise in both front-end and back-end development to
            create seamless user experiences. Utilized Next.js and TypeScript
            for the front end, and integrated robust back-end functionalities
            using {"Next.js'"} Serverless Functions whilst using MongoDB as the
            database.
          </p>
        </div>
        <div className="group flex w-full flex-col gap-4 py-4 transition-all duration-500 md:py-10">
          <h2 className="text-xl drop-shadow-glow md:text-4xl">
            Software & Game Developer | Freelance
          </h2>
          <dl className="mb-2">
            <dd className="text-base font-medium leading-6">
              <time>June 2023 - Present</time>
            </dd>
          </dl>
          <p className="text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            As a freelance developer, {"I've"} had the privilege of working on
            diverse projects, delivering innovative solutions to clients. This
            experience has allowed me to improve and use my skills in both
            mobile app and web application development, combining technical
            expertise with a keen eye for user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
