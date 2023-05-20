import ActiveLink from "./ActiveLink";
import { stringifyDate } from "@/lib/stringifyDate";


export default function BlogPreview({ publishDate, tags, title, link, previewText, views }) {
  return (
        <li className="my-10 border border-secondary border-opacity-30 rounded-2xl hover:border-opacity-100 hover:shadow-xl transition duration-300">
            <article className="w-full py-5 px-5">
                        <div className="space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0 gap-20">
                            <div className="mb-5 border-r h-full">
                                <dl>
                                    <dt className="text-secondary">Published at</dt>
                                    <dd className="text-base font-medium leading-5 text-gray-400">
                                        <time>{stringifyDate(publishDate)}</time>
                                    </dd>
                                </dl>
                                <p className="text-secondary"><i class="fa-sharp fa-regular fa-eye"></i> {views}</p>
                            </div>
                            <div className="space-y-5 md:col-span-3">
                                <div className="space-y-6">
                                    <div>
                                        <ActiveLink className="text-2xl font-bold leading-8 tracking-tight text-main hover:underline line-clamp-1" href={"/blog/" + link}>
                                            {title}
                                        </ActiveLink>
                                        <div className="flex flex-wrap my-2 gap-3">
                                            {tags.map(tag => {
                                                return <ActiveLink className="rounded-full border-2 border-white px-2 text-secondary font-semibold uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" key={tag} href={"/tags/" + tag}>{tag}</ActiveLink>
                                            })}
                                        </div>
                                    </div>
                                    <div className="text-ellipsis max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: normalizePreviewText(previewText) }}>
                                    </div>
                                </div>
                                <div className="text-base font-medium leading-6">
                                    <ActiveLink className="transition duration-300 text-main hover:underline" href={"/blog/" + link}>
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
