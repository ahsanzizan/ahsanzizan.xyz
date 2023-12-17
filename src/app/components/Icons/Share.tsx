import { IconProps } from "@/types/icons";

export default function ShareIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 2H38V16M38 25.474V35C38 35.7956 37.6839 36.5587 37.1213 37.1213C36.5587 37.6839 35.7956 38 35 38H5C4.20435 38 3.44129 37.6839 2.87868 37.1213C2.31607 36.5587 2 35.7956 2 35V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H14M21.8 18.2L37.1 2.9"
        stroke="current"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
