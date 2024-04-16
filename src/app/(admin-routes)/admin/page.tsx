import LeftArrowIcon from "@/app/components/global/icons/LeftArrow";
import { Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1 } from "@/app/components/global/ui/text";
import {
  getAllCertificates,
  getAllContents,
  getAllSocialMedias,
} from "@/database";
import { authOptions } from "@/lib/auth";
import cn from "@/lib/clsx";
import { Certificate, Content, SocialMedia } from "@prisma/client";
import { getServerSession } from "next-auth";
import CertificatesTable from "./components/CertificatesTable";
import ContentsTable from "./components/ContentsTable";
import SocialMediasTable from "./components/SocialMediasTable";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const socialMedias: SocialMedia[] = JSON.parse(
    JSON.stringify(await getAllSocialMedias()),
  );
  const contents: Content[] = JSON.parse(
    JSON.stringify(await getAllContents()),
  );
  const certificates: Certificate[] = JSON.parse(
    JSON.stringify(await getAllCertificates()),
  );

  return (
    <SectionContainer id="home">
      <header className={cn("mb-12 flex flex-col gap-2 md:gap-4")}>
        <H1>Welcome back, {session?.user?.username}</H1>
        <div className="inline-block w-auto">
          <Link href={"https://vercel.com/ahsanaazizan/ahsanzizan"}>
            Production deployment{" "}
            <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
          </Link>
        </div>
      </header>
      <div className="flex flex-col gap-12">
        <div className="block">
          <SocialMediasTable socialMedias={socialMedias} />
        </div>
        <div className="block">
          <ContentsTable contents={contents} />
        </div>
        <div className="block">
          <CertificatesTable certificates={certificates} />
        </div>
      </div>
    </SectionContainer>
  );
}
