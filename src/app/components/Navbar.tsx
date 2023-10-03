"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    };
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[1000] w-full bg-black transition-all duration-300 ${
          scrolled ? "py-0" : "py-2"
        }`}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5">
          <a href="/">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="Logo"
              className="opacity-100 transition-all duration-300 hover:opacity-60"
            />
          </a>

          <ul className="flex gap-8">
            <li>
              <a href="#home" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="nav-item">
                Works
              </a>
            </li>
            <li>
              <a href="/blog" className="nav-item">
                Blog
              </a>
            </li>
            <li>
              <a href="mailto:ahsanaz461@gmail.com" className="btn-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
