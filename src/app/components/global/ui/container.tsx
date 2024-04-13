import cn from "@/lib/clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"section"> {
  className?: string;
  children?: ReactNode;
}

export function SectionContainer({
  className,
  children,
  ...props
}: Readonly<ContainerProps>) {
  return (
    <section {...props} className={cn("mb-32 w-full py-12", className)}>
      {children}
    </section>
  );
}
