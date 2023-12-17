import { getAllSocialMedias } from "@/database/socialMedia.query";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";
import SocialMediasRow from "../global/SocialMediasRow";

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
        </div>
      </header>
    </section>
  );
}
