import cn from "@/lib/clsx";
import { Image } from "./image";
import { H3, P } from "./text";

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
          "absolute left-0 top-0 h-full w-full transition-all duration-300 group-hover:opacity-50",
        )}
        unoptimized
        variant={"default"}
      />
      <div
        className={cn(
          "bottom absolute -bottom-full left-10 block w-full transition-all duration-300 group-hover:bottom-5",
        )}
      >
        <H3>{title}</H3>
        <P>{description}</P>
      </div>
    </figure>
  );
}
