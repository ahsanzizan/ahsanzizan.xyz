"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomCursor from "../CustomCursor";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Readonly<WrapperProps>) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsHovering(false);
    const anchors = Array.from(document.body.getElementsByTagName("a"));
    const buttons = Array.from(document.body.getElementsByTagName("button"));
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    anchors.forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
    });
    buttons.forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      anchors.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
      buttons.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [pathname, router]);

  return (
    <>
      <CustomCursor isHovering={isHovering} />
      {children}
    </>
  );
}
