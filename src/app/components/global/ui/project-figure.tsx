import cn from "@/lib/clsx";
import { truncateString } from "@/utils/utilities";
import { Link } from "./button";
import { Image } from "./image";
import { H3, P } from "./text";

interface ProjectFigureProps {
  title: string;
  image: string;
  description: string;
  href: string;
  descriptionThreshold?: number;
  className?: string;
}

export function ProjectFigure({
  title,
  image,
  description,
  href,
  descriptionThreshold,
  className,
}: Readonly<ProjectFigureProps>) {
  return (
    <figure
      className={cn("group relative overflow-hidden rounded-lg", className)}
    >
      <Image
        alt={description}
        src={image}
        width={120}
        height={120}
        className={cn(
          "absolute left-0 top-0 h-full w-full grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-25 group-hover:grayscale-0",
        )}
        unoptimized
        variant={"default"}
      />
      <div className={cn("block h-full w-full transition-all duration-300")}>
        <H3 className="absolute -bottom-full left-10 transition-all duration-300 group-hover:bottom-40">
          {title}
        </H3>
        <P className="absolute -bottom-full left-10 transition-all delay-75 duration-300 group-hover:bottom-24">
          {truncateString(description, descriptionThreshold ?? 120)}
        </P>
        <Link
          href={href}
          variant={"inverse"}
          className="absolute -bottom-full left-10 delay-100 group-hover:bottom-8"
        >
          Learn more
        </Link>
      </div>
    </figure>
  );
}
