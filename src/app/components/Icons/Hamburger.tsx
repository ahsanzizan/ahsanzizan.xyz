import { IconProps } from "@/types/icons";

export default function HamburgerIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 11H19M1 6H19M1 1H19"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
