"use client"
const WysiwygViewer = dynamic(() => import('@components/Blog/WysiwygViewer'), { ssr: false });
import { stringifyDate } from "@lib/stringifyDate";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export default function ViewBlog({ blog }) {
    const viewerRef = React.createRef();
    
    return (
        <>
            <main className="px-5 md:px-24 py-32 transition duration-300 ease-in-out max-w-[1980px] mx-auto">
                <div className="block mb-10">
                    <h1 className="heading-text text-2xl md:text-5xl">{blog.title}</h1>
                    <div className="flex gap-10">
                        <p className="text-sm sm:text-base uppercase font-bold">{stringifyDate(blog.publishDate)}</p>
                        <p className="text-sm sm:text-base uppercase font-bold">{blog.clicks} Views</p>
                    </div>
                </div>
                <WysiwygViewer ref={viewerRef} content={blog.post} />
                <div className="flex flex-col gap-3 mt-10">
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