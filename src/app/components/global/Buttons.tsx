"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode } from "react";
import ShareIcon from "./Icons/Share";

interface LinkButtonProps {
  href: string;
  children?: ReactNode;
  className?: string;
}

interface FormButtonProps {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonProps {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function VisitWorkButton({
  href,
  children,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`group mb-12 inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm text-white transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg ${className}`}
    >
      {children} <ShareIcon className="ml-1 stroke-current" />
    </a>
  );
}

export function StandardLinkButton({
  href,
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg ${className}`}
    >
      {children}
    </Link>
  );
}

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={
        "group inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-base transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
      }
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="m-1 h-4 w-4 rotate-180 fill-current transition-transform duration-500 group-hover:translate-x-1"
      >
        <path
          d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
          fill="current"
        />
      </svg>{" "}
      Back
    </button>
  );
}

export function StandardButton({
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function StandardFormButton({
  children,
  className,
  disabled,
  onClick,
  type,
}: FormButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2 text-center text-base text-black transition-all duration-500 hover:drop-shadow-glow disabled:bg-neutral-400 md:px-[22px] md:py-[10px] md:text-lg ${className}`}
      disabled={disabled}
    >
      <div>
        {children}
        <div
          className={`${
            disabled ? "inline-block" : "hidden"
          } h-4 w-4 animate-spin snap-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </button>
  );
}
