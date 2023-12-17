"use client";
import { StandardButton } from "@/app/components/Buttons";
import HamburgerIcon from "@/app/components/Icons/Hamburger";
import LeftArrowIcon from "@/app/components/Icons/LeftArrow";
import XIcon from "@/app/components/Icons/X";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [activeLinkIdx, setActiveLinkIdx] = useState<number | null>(null);
  const links = [
    { href: "/admin", text: "Home" },
    { href: "/admin/works", text: "Works" },
    { href: "/admin/experiences", text: "Experiences" },
    { href: "/admin/blogs", text: "Blogs" },
  ];

  useEffect(() => {
    document.body.style.overflowY = navOpen ? "hidden" : "visible";
  }, [navOpen]);

  return (
    <>
      <nav className="fixed left-1/2 z-[998] flex w-full max-w-[1440px] -translate-x-1/2 items-center justify-between bg-black px-5 py-4">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={64}
            height={64}
            alt="Logo"
            className="h-8 w-8 rounded-full hover:drop-shadow-glow md:h-16 md:w-16"
          />
        </Link>
        <div className="flex items-center gap-[18px]">
          <StandardButton onClick={() => signOut({ callbackUrl: "/" })}>
            <LeftArrowIcon className="m-1 h-3 w-3 rotate-180 fill-current transition-transform duration-500 group-hover:-translate-x-1 md:h-4 md:w-4" />
            {" Logout"}
          </StandardButton>
          <button
            onClick={() => {
              setNavOpen(true);
            }}
            className="rounded-full border border-white px-4 py-[14px] transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-4"
          >
            <HamburgerIcon className="h-2 w-4 stroke-current md:h-3 md:w-5" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed left-1/2 top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-transparent backdrop-blur-3xl transition-all duration-500 ease-in-out`}
        style={{
          width: `${navOpen ? "100vw" : 0}`,
          height: `${navOpen ? "100vh" : 0}`,
          borderRadius: `${navOpen ? 0 : "9999px"}`,
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="mb-16 mt-6 flex w-full items-center justify-between py-4 md:mb-8">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={64}
                height={64}
                alt="Logo"
                className="h-8 w-8 rounded-full hover:drop-shadow-glow md:h-16 md:w-16"
              />
            </Link>
            <button
              onClick={() => {
                setNavOpen(false);
              }}
              className="rounded-full border border-white px-4 py-[14px] transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-4"
            >
              <XIcon className="h-2 w-4 stroke-current md:h-3 md:w-5" />
            </button>
          </div>
          <div className="inline-flex flex-col gap-16 md:gap-5">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`text-5xl transition-all duration-500 hover:drop-shadow-glow md:text-7xl`}
                style={{
                  color: `${
                    activeLinkIdx !== null
                      ? activeLinkIdx == i
                        ? "white"
                        : "black"
                      : "white"
                  }`,
                }}
                onMouseEnter={() => setActiveLinkIdx(i)}
                onMouseLeave={() => setActiveLinkIdx(null)}
                onClick={() => setNavOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
