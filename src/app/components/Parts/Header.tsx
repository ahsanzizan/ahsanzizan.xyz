import { getAllSocialMedias } from "@/database/socialMedia.query";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";

export default async function Header() {
  const socialMedias = await getAllSocialMedias();

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="flex flex-col gap-2 md:gap-4">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">
          {"I'm Ahsan Azizan, or "} <span id="nicknames"></span>
        </h4>
        <h1 className="text-4xl leading-snug drop-shadow-glow md:text-7xl">
          A dedicated software engineer
          <br />
          with a passion for crafting and
          <br />
          bringing ideas to life
        </h1>
        <div className="mt-10 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-center md:gap-[42px]">
          <StandardLinkButton href={"/about"}>
            Learn More{" "}
            <LeftArrowIcon className="m-1 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-1" />
          </StandardLinkButton>
          <div className="flex items-center gap-4 md:gap-6">
            {socialMedias.map((socialMedia, i) => {
              return (
                <a
                  key={i}
                  href={socialMedia.url}
                  target="_blank"
                  className="rounded-full border border-white p-3 transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current md:h-6 md:w-6"
                    dangerouslySetInnerHTML={{
                      __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                    }}
                  ></svg>
                </a>
              );
            })}
          </div>
        </div>
      </header>
    </section>
  );
}
