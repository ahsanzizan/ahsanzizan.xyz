import Link from "next/link";
import { stringifyDate } from "@lib/stringifyDate";

export default function Preview({ data }) {
    return (
        <div className="flex justify-between py-10">
            <div className="flex flex-col gap-2">
                <Link href={`/blog/view/${data.link}`} className="font-extrabold truncate max-w-[10rem] sm:max-w-[15rem] hover:underline">{data.title}</Link>
                <div className="flex flex-wrap gap-5">
                    {data.tags.map(tag => {
                        return (
                            <Link href={`/blog/tags/${tag}`} key={tag} className="uppercase tracking-widest text-sm lg:text-base font-bebas">
                                #{tag}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <p className="font-thin uppercase tracking-widest text-xs md:text-sm lg:text-base">{stringifyDate(data.publishDate)}</p>
        </div>
    )
}