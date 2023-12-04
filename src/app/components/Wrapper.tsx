"use client";
import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import TypeWriter from "@/utils/typewriter";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    new TypeWriter(document.getElementById("nicknames"), {
      strings: ["Ahsan", "Asan", "Sanzizan"],
      autoStart: true,
      loop: true,
      delay: 100,
    });
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
  });

  return (
    <>
      <CustomCursor isHovering={isHovering} />
      {children}
    </>
  );
}
