import LeftArrowIcon from "../global/icons/LeftArrow";
import PortalIcon from "../global/icons/portal";
import { Link } from "../global/ui/button";
import { H1 } from "../global/ui/text";

export default function Header() {
  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="flex flex-col items-center gap-2 md:gap-4">
        <H1 className="relative mb-5 text-center">
          Software Engineer That Crafts, Brings Ideas to Life
          <span className="relative">
            .{" "}
            <PortalIcon className="absolute left-2 top-4 animate-pulse drop-shadow-glow [animation-duration:3s]" />
          </span>
        </H1>
        <Link href={"/about"} className="items-center" variant={"default"}>
          Learn more{" "}
          <LeftArrowIcon className="my-auto ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:fill-white" />
        </Link>
      </header>
    </section>
  );
}
