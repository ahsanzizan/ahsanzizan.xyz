import PlayIcon from "@/app/components/global/icons/Play";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { Image } from "@/app/components/global/ui/image";
import { H1, H3, P } from "@/app/components/global/ui/text";
import { getAllCertificates } from "@/database";
import cn from "@/lib/clsx";
import { default as NextLink } from "next/link";

export default async function Certificates() {
  const certificates = await getAllCertificates();

  return (
    <SectionContainer id="certificates">
      <div
        className={cn(
          "mb-12 flex w-full flex-col items-center justify-center gap-5 md:mb-20",
        )}
      >
        <H1 className="text-center">Certifications</H1>
        <Link
          href={"https://l.ahsanzizan.xyz/certifications"}
          variant={"default"}
        >
          See more{" "}
          <PlayIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:fill-white" />
        </Link>
      </div>
      <div
        className={cn("flex w-full flex-col justify-center gap-5 md:flex-row")}
      >
        {certificates.map((certificate) => (
          <NextLink
            href={certificate.url}
            className={cn("block w-full md:w-1/4")}
            key={certificate.id.toString()}
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={256}
              height={164}
              className="relative mb-2 w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
              unoptimized
            />
            <div className="block w-full">
              <H3 className="mb-2">{certificate.title}</H3>
              <P>{certificate.description}</P>
            </div>
          </NextLink>
        ))}
      </div>
    </SectionContainer>
  );
}
