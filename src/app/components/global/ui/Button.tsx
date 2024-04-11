import cn from "@/lib/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const buttonVariants = cva(
  "group inline-flex w-fit rounded-full border px-8 py-3 font-medium text-sm tracking-wider disabled:opacity-50 hover:scale-110 transition-all duration-300 md:text-base",
  {
    variants: {
      variant: {
        default: "border-neutral-500 bg-black hover:bg-white hover:text-black",
        inverse:
          "border-white bg-white text-black hover:bg-black hover:text-white",
      },
    },
  },
);

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

interface LinkProps extends NextLinkProps, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

export function Button({ children, variant, ...props }: Readonly<ButtonProps>) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }))}>
      {children}
    </button>
  );
}

export function Link({ children, variant, ...props }: Readonly<LinkProps>) {
  return (
    <NextLink {...props} className={cn(buttonVariants({ variant }))}>
      {children}
    </NextLink>
  );
}
