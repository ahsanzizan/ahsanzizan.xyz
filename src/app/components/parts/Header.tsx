"use client";

import cn from "@/lib/clsx";
import { introVariants } from "@/utils/utilities";
import { motion } from "framer-motion";
import PlayIcon from "../global/icons/Play";
import PortalIcon from "../global/icons/Portal";
import { Link } from "../global/ui/button";
import { SectionContainer } from "../global/ui/container";
import { H1 } from "../global/ui/text";

export default function Header() {
  return (
    <SectionContainer id="home">
      <motion.header
        className={cn("z-10 flex flex-col items-center gap-2 md:gap-4")}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introVariants}
        transition={{ type: "spring" }}
      >
        <H1 className="relative mb-5 text-center">
          Software Engineer That Crafts, Brings Ideas to Life
          <span className={cn("relative")}>
            .{" "}
            <PortalIcon className="absolute left-2 top-4 animate-pulse drop-shadow-glow [animation-duration:3s]" />
          </span>
        </H1>
        <Link href={"/about"} className="items-center" variant={"default"}>
          Learn more{" "}
          <PlayIcon className="my-auto ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:fill-white" />
        </Link>
      </motion.header>
    </SectionContainer>
  );
}
