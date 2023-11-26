"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [activeLinkIdx, setActiveLinkIdx] = useState<number | null>(null);
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/works", text: "Works" },
    { href: "/blog", text: "Blog" },
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
          <a
            href="mailto:ahsanaz461@gmail.com"
            className="group flex items-center gap-1 rounded-full border border-white px-4 py-2 text-sm transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
          >
            {"Let's Talk "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4"
            >
              <path
                d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
                fill="current"
              />
            </svg>
          </a>
          <button
            onClick={() => {
              setNavOpen(true);
            }}
            className="rounded-full border border-white px-4 py-[14px] transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-4"
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-4 stroke-current md:h-3 md:w-5"
            >
              <path
                d="M1 11H19M1 6H19M1 1H19"
                stroke="current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`fixed left-1/2 top-[55%] md:top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-transparent backdrop-blur-3xl transition-all duration-500 ease-in-out`}
        style={{
          width: `${navOpen ? "100vw" : 0}`,
          height: `${navOpen ? "100vh" : 0}`,
          borderRadius: `${navOpen ? 0 : "9999px"}`,
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5">
          <div className="mb-16 md:mb-8 flex w-full items-center justify-between py-4">
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
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-4 stroke-current md:h-3 md:w-5"
              >
                <path
                  d="M1 0.999756L19 10.9998M1 11L19 0.999756"
                  stroke="current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="inline-flex flex-col gap-16 md:gap-4">
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
