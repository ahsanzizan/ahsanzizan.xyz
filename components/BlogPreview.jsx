import ActiveLink from "./ActiveLink";
import { stringifyDate } from "@/lib/stringifyDate";


export default function BlogPreview({ publishDate, tags, title, link, previewText }) {
  return (
    <li className="py-12 px-5 my-10 border border-secondary rounded">
            <article className="w-full">
                <div className="space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0 gap-20">
                    <div className="mb-5 border-r h-full">
                        <dl>
                            <dt className="text-gray-300">Published at</dt>
                            <dd className="text-base font-medium leading-6 text-gray-400">
                                <time>{stringifyDate(publishDate)}</time>
                            </dd>
                        </dl>
                    </div>
                    <div className="space-y-5 md:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <ActiveLink className="text-2xl font-bold leading-8 tracking-tight text-main hover:underline" href={"/blog/" + link}>
                                    {title}
                                </ActiveLink>
                                <div className="flex flex-wrap my-2">
                                    {tags.map(tag => {
                                        return <ActiveLink className="rounded-full border-2 border-white px-3 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" key={tag} href={"/tags/" + tag}>{tag}</ActiveLink>
                                    })}
                                </div>
                            </div>
                            <div className="text-ellipsis max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: normalizePreviewText(previewText) }}>
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <ActiveLink className="transition duration-300 text-main" href={"/blog/" + link}>
                                Read more
                            </ActiveLink>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    )
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
