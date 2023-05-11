import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ActiveLink from "@/components/ActiveLink";
import { stringifyDate } from "@/lib/stringifyDate";
import Script from "next/script";
import dynamic from "next/dynamic";
import clientProm from "@/lib/mongodb";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const WysiwygViewer = dynamic(() => import('@/components/WysiwygViewer'), { ssr: false });

export default function RenderBlog({ data }) {
    const viewerRef = React.createRef();
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
            : '';
            
    const url = `${origin}${asPath}`;
    viewerRef?.current?.viewerInst?.setMarkdown(data.post);
    
    return (
        <>
            <Header title={'ahsanAazizan | ' + data.title} />
            
            <Navbar />
            <div className="max-w-5xl mx-auto pt-10 text-secondary px-10">
                <header className="pb-8">
                    <div className="border-b-2 border-gray-400">
                        <h1 className="pb-6 text-center text-2xl font-extrabold leading-9 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">{data.title}</h1>
                    </div>
                    <div className="pb-4 pt-4 flex justify-between text-xs md:text-base">
                        <span className="text-gray-500"><span className="text-secondary">{stringifyDate(data.publishDate)}</span> by <span className="text-main">{data.authorName}</span></span>
                        <p className="text-gray-500"><span className="text-secondary">{data.clicks}</span> Views</p>
                    </div>
                </header>
                <WysiwygViewer ref={viewerRef} content={data.post} />
                <div className="mb-12 mt-24 border-t border-secondary mx-auto flex justify-between items-center py-3">
                    <div className="block">
                        <p className="text-xs md:text-base mb-1">Share</p>
                        <input onClick={copyLink} placeholder="Blog's Link" className="max-w-[120px] md:max-w-xs overflow-hidden text-gray-800 px-2 py-1 text-xs md:text-base cursor-pointer bg-white border-2 border-gray-200 text-center rounded" value={url} readOnly />
                    </div>
                    <div className="max-w-xs flex flex-wrap items-center">
                        {data.tags ? data.tags.map(tag => {
                            return <ActiveLink className="rounded-full border-2 border-white px-2 md:px-3 py-1 text-secondary text-xs md:text-base font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary mb-2" key={tag} href={"/tags/" + tag}>{tag}</ActiveLink>
                        }) : null}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function copyLink(e) {
    navigator.clipboard.writeText(e.target.value).then(() => alert("Copied Link Successfully"))
}

export async function getServerSideProps({ query }) {
    var { link } = query;
    link = link.join('/');
    const connectDB = await clientProm;
    var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    var findBlog = getBlogs ? getBlogs.findIndex(x => x.link == link) : -1;
    if ((findBlog + 1) && process.env.NODE_ENV === 'production') {
        // Update clicks
        connectDB.db('personal-blog').collection('blog-post').updateOne({ link: link }, { $inc: { clicks: 1 } })
    }
    
    var data = findBlog + 1 ? JSON.parse(JSON.stringify(getBlogs.splice(findBlog, 1)[0])) : {};

    return {
        props: {
            data,
        }
    }
}
