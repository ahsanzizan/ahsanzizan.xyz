import cn from "@/lib/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React from "react";

const anchorVariants = cva(
  "group text-neutral-400 text-sm relative inline-flex w-fit transition-all duration-300 md:text-base",
  {
    variants: {
      variant: {
        default: "hover:text-white",
      },
    },
  },
);

interface AnchorProps extends LinkProps, VariantProps<typeof anchorVariants> {
  children?: React.ReactNode;
}

export function Anchor({ children, variant, ...props }: Readonly<AnchorProps>) {
  return (
    <Link {...props} className={cn(anchorVariants({ variant }))}>
      {children}
      <div
        className={cn(
          "absolute bottom-0 left-0 origin-right transition-all duration-300",
          "h-[1px] w-full group-hover:w-0",
          "bg-neutral-400 group-hover:bg-white",
        )}
      ></div>
    </Link>
  );
}
