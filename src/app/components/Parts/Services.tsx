"use client";

import cn from "@/lib/clsx";
import { introVariants } from "@/utils/utilities";
import { motion } from "framer-motion";
import PortalIcon from "../global/icons/portal";
import { H1, H4, P } from "../global/ui/text";

const services = [
  {
    title: "Mobile App Development",
    description:
      "I can help you create an application that runs on iOS and/or Android platforms.",
  },
  {
    title: "Web-App Development",
    description:
      "I can help you creates an interactive and responsive web-app with modern frameworks.",
  },
  {
    title: "Data Analytics",
    description:
      "I can help you analyze a big data and present the result in a readable and interactive way.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className={cn("mb-32 w-full py-12")}>
      <motion.div
        className={cn("relative flex flex-col justify-between lg:flex-row")}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introVariants}
        transition={{ type: "spring" }}
      >
        <div
          className={cn(
            "mb-[42px] w-full lg:sticky lg:top-[6em] lg:mb-0 lg:h-[170px] lg:w-[45%] lg:self-start",
          )}
        >
          <H1>I Could Help You With...</H1>
        </div>
        <div
          className={cn(
            "flex w-full flex-col divide-y divide-white rounded-full lg:w-1/2",
          )}
        >
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className={cn("flex w-full py-5 lg:justify-between")}
              >
                <div>
                  <H4 className="mb-[14px] flex items-center gap-1">
                    {service.title}
                    <PortalIcon
                      className={cn("animate-spin [animation-duration:5s]")}
                    />
                  </H4>
                  <P>{service.description}</P>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
