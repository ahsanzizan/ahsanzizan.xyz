import { StandardLinkButton } from "@/app/components/global/Buttons";
import LeftArrowIcon from "@/app/components/global/icons/LeftArrow";
import SocialMediasRow from "@/app/components/global/SocialMediasRow";
import { getContentbyKey } from "@/database/content.query";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import Image from "next/image";
import Me from "../../../../public/Me.png";

export default async function Header() {
  const socialMedias = await getAllSocialMedias();
  const aboutMe = await getContentbyKey("about-me");

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="flex w-full flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
        <div className="flex w-full flex-col gap-2 md:w-1/2 md:gap-4">
          <h1 className="text-4xl leading-snug drop-shadow-glow md:text-7xl">
            About Me
          </h1>
          <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            {aboutMe?.content ?? "Something wrong occured."}
          </p>
          <div className="mt-10 flex flex-col items-start gap-7 md:mt-12 md:gap-[42px] lg:flex-row lg:items-center">
            <StandardLinkButton href={"/blog"}>
              My Personal Blog{" "}
              <LeftArrowIcon className="m-1 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-1" />
            </StandardLinkButton>
            <SocialMediasRow socialMedias={socialMedias} />
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <Image
            src={Me}
            alt="Me"
            width={2731}
            height={4096}
            className="w-full rounded-xl grayscale"
            placeholder="blur"
            priority
          />
        </div>
      </header>
    </section>
  );
}
