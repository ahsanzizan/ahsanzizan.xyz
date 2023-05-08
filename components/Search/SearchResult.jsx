import ActiveLink from "../ActiveLink";

export const SearchResult = ({ result }) => {
  return (
    <ActiveLink className="text-[#222831] flex py-3 px-3 cursor-pointer hover:text-4B70EA" href={`/blog/${result.link}`}>
        {result.title} - <span className="text-main text-sm px-1">{`/blog/${result.link}`}</span>
    </ActiveLink>
  );
}

function normalizePreviewText(textToNormalize) {
  let temp = textToNormalize;
  temp = temp.replace(/<style([\s\S]*?)<\/style>/gi, '');
  temp = temp.replace(/<script([\s\S]*?)<\/script>/gi, '');
  temp = temp.replace(/<\/div>/ig, '\n');
  temp = temp.replace(/<\/li>/ig, '\n');
  temp = temp.replace(/<li>/ig, '  *  ');
  temp = temp.replace(/<\/ul>/ig, '\n');
  temp = temp.replace(/<\/oembed>/ig, '');
  temp = temp.replace(/<\/p>/ig, '\n');
  temp = temp.replace(/<br\s*[\/]?>/gi, "\n");
  temp = temp.replace(/<[^>]+>/ig, '');
  return temp;
}
