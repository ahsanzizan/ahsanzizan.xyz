import { LANDING_TEXT } from "@/utils/constants";
import InfiniteScrollAnimation from "./Parts/InfiniteScrollAnimation";

export default function Landing() {
  return (
    <>
      <section id="home" className="mx-auto max-w-5xl px-5 py-32">
        <InfiniteScrollAnimation
          width={"100%"}
          height={"24rem"}
          className="mb-24"
        />
        <div className="w-full">
          <h1 className="mb-8 w-full text-8xl font-bold leading-[.9]">
            {LANDING_TEXT.heading}
          </h1>
          <p className="mb-12 text-2xl font-medium">
            {LANDING_TEXT.subheading}
          </p>
          <div className="flex gap-12">
            <a
              href="/blog"
              className="btn-stype group border-primary bg-primary text-2xl text-theme opacity-100 hover:opacity-70"
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
              className="btn-stype group border-secondary bg-secondary text-2xl text-opacity-70 hover:border-primary hover:bg-primary hover:text-theme hover:text-opacity-100"
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
