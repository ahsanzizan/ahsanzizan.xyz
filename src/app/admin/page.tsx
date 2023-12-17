import { authOptions } from "@/lib/auth";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import { getServerSession } from "next-auth";
import SocialMediasTable from "./components/SocialMediasTable";
import { SocialMedia } from "@/models/SocialMedia.model";
import { Content } from "@/models/Content.model";
import { getAllContents } from "@/database/content.query";
import ContentsTable from "./components/ContentsTable";
import { StandardLinkButton } from "../components/global/Buttons";
import LeftArrowIcon from "../components/global/Icons/LeftArrow";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const socialMedias: SocialMedia[] = JSON.parse(
    JSON.stringify(await getAllSocialMedias()),
  );
  const contents: Content[] = JSON.parse(
    JSON.stringify(await getAllContents()),
  );

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="mb-12 flex flex-col gap-2 md:gap-4">
        <h1 className="mb-7 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          Welcome back, {session?.user?.username}
        </h1>
        <div className="inline-block w-auto">
          <StandardLinkButton
            href={"https://vercel.com/ahsanaazizan/ahsanzizan"}
          >
            Go to Production Deployment{" "}
            <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
          </StandardLinkButton>
        </div>
      </header>
      <div className="flex flex-col gap-12">
        <div className="block">
          <SocialMediasTable socialMedias={socialMedias} />
        </div>
        <div className="block">
          <ContentsTable contents={contents} />
        </div>
      </div>
    </section>
  );
}
