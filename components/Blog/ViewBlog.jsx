"use client"
const WysiwygViewer = dynamic(() => import('@components/WysiwygViewer'), { ssr: false });
import { stringifyDate } from "@lib/stringifyDate";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react"

export default function ViewBlog({ blog }) {
    const viewerRef = React.createRef();
    
    return (
        <>
            <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
                <div className="block mb-10">
                    <h1 className="heading-text text-2xl md:text-5xl">{blog.title}</h1>
                    <div className="flex gap-10">
                        <p className="text-sm sm:text-base uppercase font-bold">{stringifyDate(blog.publishDate)}</p>
                        <p className="text-sm sm:text-base uppercase font-bold">{blog.clicks} Views</p>
                    </div>
                </div>
                <WysiwygViewer ref={viewerRef} content={blog.post} />
            </main>
        </>
    )
} 