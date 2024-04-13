import { getAllSocialMedias } from "@/database/socialMedia.query";
import cn from "@/lib/clsx";
import { Fragment } from "react";
import PlayIcon from "../global/icons/Play";
import PortalIcon from "../global/icons/portal";
import { Link } from "../global/ui/button";
import { SectionContainer } from "../global/ui/container";
import { H1 } from "../global/ui/text";

export default async function Contact() {
  const socialMedias = await getAllSocialMedias();

  return (
    <SectionContainer id="contact">
      <div
        className={cn(
          "mb-12 flex w-full flex-col items-center justify-center gap-5 md:mb-20",
        )}
      >
        <H1 className="text-center">Let's Connect!</H1>
        <Link href={"/works"} variant={"default"}>
          Email me{" "}
          <PlayIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:fill-white" />
        </Link>
      </div>
      <div className={cn("flex items-center justify-between")}>
        {socialMedias.map((socialMedia, i) => {
          return (
            <Fragment key={socialMedia._id.toString()}>
              <a
                href={socialMedia.url}
                target="_blank"
                className="group transition-all duration-300 hover:scale-125"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 fill-neutral-400 transition-[fill] duration-300 group-hover:fill-white md:h-14 md:w-14"
                  dangerouslySetInnerHTML={{
                    __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                  }}
                ></svg>
              </a>
              {i !== socialMedias.length - 1 && (
                <PortalIcon key={socialMedia._id.toString()} />
              )}
            </Fragment>
          );
        })}
      </div>
    </SectionContainer>
  );
}
