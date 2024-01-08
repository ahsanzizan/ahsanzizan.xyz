import { getAllCertificates } from "@/database/cerficate.query";
import Image from "next/image";
import Link from "next/link";

export default async function Certificates() {
  const certificates = await getAllCertificates();

  return (
    <section id="certificates" className="mb-32 w-full py-12">
      <h1 className="mb-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
        Certificates
      </h1>
      <div className="flex w-full flex-col flex-wrap items-center gap-5 md:flex-row">
        {certificates.map((certificate) => (
          <Link
            href={certificate.url}
            className="block w-full md:w-1/4"
            key={certificate._id.toString()}
          >
            <Image
              src={certificate.image}
              alt={"Certificate" + certificate.title}
              width={256}
              height={164}
              className="relative mb-2 w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
              unoptimized
            />
            <div className="block w-full">
              <h3 className="mb-[14px] text-base drop-shadow-glow sm:text-2xl lg:text-[28px]">
                {certificate.title}
              </h3>
              <p className="text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
                {certificate.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
