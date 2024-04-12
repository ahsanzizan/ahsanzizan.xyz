import cn from "@/lib/clsx";
import { IconProps } from "@/types/icon";

export default function PortalIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 31 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 31.5608C15.469 23.0109 8.54135 16.0895 0 16.0895C8.56041 16.0895 15.5 9.13698 15.5 0.560791C15.5309 9.11068 22.4586 16.0321 31 16.0321C22.4394 16.0321 15.5 22.9846 15.5 31.5608Z"
        fill="white"
      />
    </svg>
  );
}
