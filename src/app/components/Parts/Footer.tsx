import { getContentbyKey } from "@/database/content.query";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";

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
      </footer>
    </>
  );
}
