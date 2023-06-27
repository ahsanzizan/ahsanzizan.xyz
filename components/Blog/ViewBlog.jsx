"use client"
const Viewer = dynamic(() => import('@components/Blog/TUIViewer'), { ssr: false });
import { stringifyDate } from "@lib/stringifyDate";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export default function ViewBlog({ blog }) {
    const viewerRef = React.createRef();
    
    return (
        <>
            <main className="px-5 md:px-24 py-32 transition duration-300 ease-in-out max-w-[1980px] mx-auto">
                <div className="pb-5">
                    <Link href={'/blog'} className="font-extrabold uppercase text-xl md:text-3xl">
                        {"<"} <span className="hover:underline">Back</span>
                    </Link>
                </div>
                <div className="mb-10">
                    <h1 className="heading-text text-3xl md:text-5xl">{blog.title}</h1>
                    <div className="flex gap-10">
                        <p className="text-sm sm:text-base uppercase font-bold">{stringifyDate(blog.publishDate)}</p>
                        <p className="text-sm sm:text-base uppercase font-bold">{blog.clicks} Views</p>
                    </div>
                </div>
                <Viewer ref={viewerRef} content={blog.post} />
                <div className="flex flex-col gap-3 mt-10 pt-5 border-t-2 border-black">
                    <h4 className="font-extrabold text-sm sm:text-base uppercase">Tags:</h4>
                    <div className="flex flex-wrap gap-3">
                        {blog.tags.map((tag) => {
                            return  (
                                <Link className="text-sm sm:text-base uppercase font-bold font-bebas tracking-widest" key={tag} href={`/blog/tags/${tag}`}>
                                    #{tag}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
} 