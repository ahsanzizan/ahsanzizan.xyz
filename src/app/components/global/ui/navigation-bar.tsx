"use client";

import cn from "@/lib/clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/works", text: "Works" },
  { href: "/blog", text: "Blog" },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className={cn("fixed top-12 z-[999] flex w-full justify-center px-5")}>
      <ul
        className={cn(
          "flex w-full max-w-sm items-center justify-between rounded-full border border-neutral-500 bg-black p-2",
        )}
      >
        {links.map((link) => {
          const currentRoute = pathname.split("/")[1];
          const isActive =
            currentRoute === link.href.toLowerCase().split("/")[1];

          return (
            <li
              key={link.text}
              className={cn(
                `rounded-full transition-all duration-300 hover:bg-neutral-600 ${
                  isActive ? "bg-neutral-800 hover:bg-neutral-800" : "bg-black"
                }`,
              )}
            >
              <Link href={link.href} className={cn("block px-5 py-2")}>
                <span className={cn("text-xs sm:text-sm md:text-base")}>
                  {link.text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
