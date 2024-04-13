import cn from "@/lib/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const inputVariants = cva(
  "block w-full rounded-full border border-neutral-400 bg-black p-2.5 text-sm focus:border-white focus:ring-white",
  {
    variants: {
      variant: {
        round: "rounded-full",
        normal: "rounded-lg",
      },
    },
  },
);

interface InputProps
  extends ComponentPropsWithoutRef<"input">,
    VariantProps<typeof inputVariants> {
  label: string;
}

export function Input({
  label,
  className,
  variant,
  ...props
}: Readonly<InputProps>) {
  return (
    <div className={cn("block", className)}>
      <label
        htmlFor={props.name}
        className={cn("mb-2 block text-lg font-medium")}
      >
        {label}
      </label>
      <input className={cn(inputVariants({ variant }))} {...props} />
    </div>
  );
}

export function HiddenInfo({
  name,
  value,
}: Readonly<{ name: string; value: string }>) {
  return <input type="hidden" id={name} name={name} value={value} />;
}

interface TextAreaInputProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

export function TextAreaInput({
  label,
  className,
  ...props
}: Readonly<TextAreaInputProps>) {
  return (
    <div className={cn("block", className)}>
      <label
        htmlFor={props.name}
        className={cn("mb-2 block text-lg font-medium")}
      >
        {label}
      </label>
      <textarea
        className={cn(
          "block w-full rounded-lg border border-neutral-400 bg-black p-2.5 text-sm focus:border-white focus:ring-white",
        )}
        {...props}
      />
    </div>
  );
}

export function DateInput({
  name,
  label,
  defaultValue,
  required,
}: Readonly<{
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
}>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
      >
        {label}
      </label>
      <input
        className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
        style={{ WebkitTextFillColor: "#fff" }}
        type="date"
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}
