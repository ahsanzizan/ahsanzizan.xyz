import LeftArrowIcon from "@/app/components/global/icons/LeftArrow";
import PortalIcon from "@/app/components/global/icons/Portal";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { Image } from "@/app/components/global/ui/image";
import { H1, P } from "@/app/components/global/ui/text";
import { getContentbyKey } from "@/database/content.query";
import cn from "@/lib/clsx";
import Me from "../../../../../public/Me.png";

export default async function Header() {
  const aboutMe = await getContentbyKey("about-me");

  return (
    <SectionContainer id="home">
      <header
        className={cn(
          "flex w-full flex-col items-center justify-between gap-12 md:flex-row md:gap-0",
        )}
      >
        <div className={cn("flex w-full flex-col gap-2 md:w-1/2 md:gap-4")}>
          <H1>About Me</H1>
          <P>{aboutMe?.content ?? "Something wrong occured."}</P>
          <div
            className={cn(
              "mt-10 flex flex-col items-start gap-7 md:mt-12 md:gap-[42px] lg:flex-row lg:items-center",
            )}
          >
            <Link href={"/blog"} variant={"default"}>
              My blogs{" "}
              <LeftArrowIcon className="my-auto ml-2 h-4 w-4 fill-current transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-[30%]">
          <Image
            src={Me}
            alt="Me"
            width={2731}
            height={4096}
            className="w-full rounded-full grayscale"
            placeholder="blur"
            priority
          />

          <PortalIcon className="absolute left-0 top-0 animate-pulse [animation-delay:1s]" />
          <PortalIcon className="absolute -right-4 top-16 animate-pulse" />
          <PortalIcon className="absolute bottom-0 left-0 -translate-y-[80%] animate-pulse [animation-delay:1s]" />
        </div>
      </header>
    </SectionContainer>
  );
}
