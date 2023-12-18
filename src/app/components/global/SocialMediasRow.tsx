import { SocialMedia } from "@/types/models";

export default function SocialMediasRow({
  socialMedias,
}: {
  socialMedias: SocialMedia[];
}) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      {socialMedias.map((socialMedia, i) => {
        return (
          <a
            key={i}
            href={socialMedia.url}
            target="_blank"
            className="rounded-full border border-white p-3 transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current md:h-6 md:w-6"
              dangerouslySetInnerHTML={{
                __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
              }}
            ></svg>
          </a>
        );
      })}
    </div>
  );
}
