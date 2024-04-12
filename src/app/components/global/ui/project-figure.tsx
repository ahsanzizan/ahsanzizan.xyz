import cn from "@/lib/clsx";
import { Image } from "./image";
import { H3, P } from "./text";
import { Button } from "./button";

interface ProjectFigureProps {
  title: string;
  image: string;
  description: string;
  className?: string;
}

export function ProjectFigure({
  title,
  image,
  description,
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
          "absolute left-0 top-0 h-full w-full transition-all duration-300 group-hover:scale-110 group-hover:opacity-25",
        )}
        unoptimized
        variant={"default"}
      />
      <div className={cn("block h-full w-full transition-all duration-300")}>
        <H3 className="absolute -bottom-full left-10 transition-all duration-300 group-hover:bottom-32">
          {title}
        </H3>
        <P className="absolute -bottom-full left-10 transition-all delay-75 duration-300 group-hover:bottom-24">
          {description}
        </P>
        <Button
          variant={"default"}
          className="absolute -bottom-full left-10 delay-100 group-hover:bottom-8"
        >
          Learn more
        </Button>
      </div>
    </figure>
  );
}
