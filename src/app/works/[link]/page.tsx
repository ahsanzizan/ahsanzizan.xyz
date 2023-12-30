import { BackButton, VisitWorkButton } from "@/app/components/global/Buttons";
import Wrapper from "@/app/components/global/Wrapper";
import Footer from "@/app/components/Parts/Footer";
import Navbar from "@/app/components/Parts/Navbar";
import { getContentbyKey } from "@/database/content.query";
import { getProjectByLink } from "@/database/project.query";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { link: string };
}) {
  const link = params.link;
  const work = await getProjectByLink(link);
  return {
    title: work.title,
    description: "Ahsan's Project",
  };
}

export default async function Work({ params }: { params: { link: string } }) {
  const link = params.link;
  const work = await getProjectByLink(link);
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <Wrapper>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <BackButton />
        <section id="works" className="mb-32 w-full py-12">
          {work.isWorkedOn && (
            <h5 className="text-md mb-8 md:text-xl">
              (This project is under development)
            </h5>
          )}
          <h1 className="mb-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
            {work.title}
          </h1>
          <p className="mb-7 text-sm leading-7 text-neutral-400 sm:text-base lg:text-xl">
            {work.description}
          </p>
          <VisitWorkButton href={work.url} disabled={work.isWorkedOn!}>
            Visit Work
          </VisitWorkButton>
          <Image
            src={work.image}
            alt={"Image of " + work.title}
            width={1920}
            height={1080}
            about={work.description}
            className="w-full rounded-xl"
            unoptimized
          />
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
