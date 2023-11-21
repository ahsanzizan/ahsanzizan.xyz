"use client";
import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";

interface HomeWrapperProps {
  children: React.ReactNode;
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
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
