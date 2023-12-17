import { getContentbyKey } from "@/database/content.query";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";
import SocialMediasRow from "../global/SocialMediasRow";

export default async function Footer() {
  const socialMedias = await getAllSocialMedias();
  const email = await getContentbyKey("email");

  return (
    <>
      <footer className="flex w-full flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="block">
          <StandardLinkButton
            href={"mailto:" + email?.content || "ahsanaz461@gmail.com"}
          >
            {"Let's Talk "}
            <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
          </StandardLinkButton>
        </div>
        <div>
          <SocialMediasRow socialMedias={socialMedias} />
        </div>
      </footer>
    </>
  );
}
