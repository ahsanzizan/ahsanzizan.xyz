"use client";
import { deleteSocialMediaAction } from "@/actions/deleteActions";
import {
  StandardButton,
  StandardLinkButton,
} from "@/app/components/global/Buttons";
import { SocialMedia } from "@/types/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SocialMediasTable({
  socialMedias,
}: Readonly<{
  socialMedias: SocialMedia[];
}>) {
  const router = useRouter();
  const simplifiedSocialMedias: SocialMedia[] = JSON.parse(
    JSON.stringify(socialMedias),
  );

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Social Medias</h4>
        <StandardLinkButton href={"/admin/social-medias/new"}>
          New
        </StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedSocialMedias.map((socialMedia) => (
          <div
            key={socialMedia._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current md:h-6 md:w-6"
                dangerouslySetInnerHTML={{
                  __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                }}
              ></svg>
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {socialMedia.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteSocialMediaAction(socialMedia._id.toString()).then(
                    () => {
                      toast.success("Successfully deleted a social media", {
                        id: toastId,
                      });
                      router.refresh();
                    },
                  );
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/social-medias/" + socialMedia._id.toString()}
              >
                Edit
              </StandardLinkButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
