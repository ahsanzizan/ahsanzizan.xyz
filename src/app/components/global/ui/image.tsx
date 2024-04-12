import cn from "@/lib/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";

const imageVariants = cva("object-cover", {
  variants: {
    variant: {
      default: "rounded-lg",
      round: "rounded-xl",
      "round-full": "rounded-full",
    },
  },
});

interface ImageProps
  extends NextImageProps,
    VariantProps<typeof imageVariants> {}

export function Image({ className, variant, ...props }: Readonly<ImageProps>) {
  return (
    <NextImage
      {...props}
      className={cn(imageVariants({ variant }), className)}
    />
  );
}
