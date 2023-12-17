import { IconProps } from "@/types/icons";

export default function XIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 0.999756L19 10.9998M1 11L19 0.999756"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
