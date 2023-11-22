export default function Services() {
  return (
    <>
      <section
        id="layanan"
        className="mx-auto w-full max-w-[1440px] px-5 py-[54px]"
      >
        <div className="relative flex flex-col justify-between lg:flex-row">
          <div className="mb-[42px] w-full lg:sticky lg:top-[6em] lg:mb-0 lg:h-[170px] lg:w-[45%] lg:self-start">
            <h2 className="text-7xl drop-shadow-glow">
              I Could Help You With...
            </h2>
          </div>
          <div className="flex w-full flex-col divide-y divide-white rounded-full lg:w-1/2">
            <div className="flex w-full gap-7 pb-[52px] lg:justify-between">
              <div>
                <h3 className="mb-[14px] text-base drop-shadow-glow sm:text-2xl lg:text-[28px]">
                  Mobile App Development
                </h3>
                <p className="text-sm leading-7 sm:text-base lg:text-xl">
                  I can help you create an application that runs on iOS and
                  Android platforms.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-7 py-[52px] lg:justify-between">
              <div>
                <h3 className="mb-[14px] text-base drop-shadow-glow sm:text-2xl lg:text-[28px]">
                  Web-App Development
                </h3>
                <p className="text-sm leading-7 sm:text-base lg:text-xl">
                  I can help you creates an interactive and responsive web-app
                  with React and TypeScript.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-7 pt-[52px] lg:justify-between">
              <div>
                <h3 className="mb-[14px] text-base drop-shadow-glow sm:text-2xl lg:text-[28px]">
                  Game Development
                </h3>
                <p className="text-sm leading-7 sm:text-base lg:text-xl">
                  I can help you creates a game that runs on various platforms
                  with the Unity Game Engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
