import LeftArrowIcon from "@/app/components/global/icons/LeftArrow";
import { Button, Link } from "@/app/components/global/ui/button";
import { SectionContainer } from "@/app/components/global/ui/container";
import { H1, H4, P } from "@/app/components/global/ui/text";
import { getProjectByLink } from "@/database";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: Readonly<{
  params: { link: string };
}>) {
  const link = params.link;
  const work = await getProjectByLink(link);

  if (work)
    return {
      title: work.title,
      description: work.description,
    };

  return {
    title: "No work found",
  };
}

export default async function Work({
  params,
}: Readonly<{ params: { link: string } }>) {
  const link = params.link;
  const work = await getProjectByLink(link);

  if (!work) notFound();

  return (
    <>
      <Link href={"/works"} variant={"default"}>
        <LeftArrowIcon className="my-auto mr-2 h-4 w-4 rotate-180 fill-current transition-transform duration-500 group-hover:-translate-x-2" />{" "}
        Go back
      </Link>
      <SectionContainer id="works">
        {work.isWorkedOn && <H4>(This project is under development)</H4>}
        <H1 className="mb-4">{work.title}</H1>
        <P className="mb-8">{work.description}</P>
        {work.isWorkedOn ? (
          <Button disabled variant={"default"} className="mb-8">
            Visit work
          </Button>
        ) : (
          <Link
            href={work.isWorkedOn ? "#" : work.url}
            variant={"default"}
            className="mb-8"
          >
            Visit work
          </Link>
        )}
        <Image
          src={work.image}
          alt={"Image of " + work.title}
          width={1920}
          height={1080}
          about={work.description}
          className="w-full rounded-xl"
          unoptimized
        />
      </SectionContainer>
    </>
  );
}
