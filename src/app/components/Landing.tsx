const heading = "Where Passion and Skill Converge";
const subHeading =
  "I'm Ahsan Awadullah Azizan, a dedicated software engineer with a passion for crafting, visualizing, and bringing ideas to life through programming, and making technology accessible to all.";

export default function Landing() {
  return (
    <>
      <section id="home" className="mx-auto py-32 max-w-5xl px-5">
        <div className="mb-24 h-96 w-full overflow-hidden" id="landing-uao">
          <div id="1" className="h-1/3 w-full bg-black opacity-100"></div>
          <div id="2" className="h-1/3 w-full bg-black opacity-80"></div>
          <div id="3" className="h-1/3 w-full bg-black opacity-60"></div>
          <div id="4" className="h-1/3 w-full bg-black opacity-40"></div>
          <div id="5" className="h-1/3 w-full bg-black opacity-20"></div>

          <div id="1" className="h-1/3 w-full bg-black opacity-100"></div>
          <div id="2" className="h-1/3 w-full bg-black opacity-80"></div>
          <div id="3" className="h-1/3 w-full bg-black opacity-60"></div>
          <div id="4" className="h-1/3 w-full bg-black opacity-40"></div>
          <div id="5" className="h-1/3 w-full bg-black opacity-20"></div>
        </div>
        <div className="w-full">
          <h1 className="mb-8 w-full text-8xl font-bold leading-[.9]">
            {heading}
          </h1>
          <p className="mb-12 text-2xl font-medium">{subHeading}</p>
          <div className="flex gap-12">
            <a
              href="/blog"
              className="btn-stype border-primary bg-primary text-theme group text-2xl opacity-100 hover:opacity-70"
            >
              Discover More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 flex-shrink-0 translate-x-0 select-none fill-current transition-transform duration-300 group-hover:translate-x-2"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
              </svg>
            </a>
            <a
              href="#works"
              className="btn-stype border-secondary bg-secondary hover:bg-primary hover:border-primary hover:text-theme group text-2xl text-opacity-70 hover:text-opacity-100"
            >
              Works Done{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 flex-shrink-0 translate-y-0 rotate-90 select-none fill-current transition-transform duration-300 group-hover:translate-y-2"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
