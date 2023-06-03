import React from "react";
import Navbar from "@/components/Navbar";
import { stringifyDate } from "@/lib/stringifyDate";
import dynamic from "next/dynamic";
import clientProm from "@/lib/mongodb";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { ArticleJsonLd } from "next-seo";
const WysiwygViewer = dynamic(() => import('@/components/WysiwygViewer'), { ssr: false });

function copyLink(e) {
    navigator.clipboard.writeText(e.target.value).then(() => alert("Copied Link Successfully"));
}

export default function RenderBlog({ data }) {
    const navContents = [
        {
            title: 'Home',
            href: '/blog',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Tags',
            href: '/blog/tags',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Months',
            href: '/blog/months',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]
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
            <Header title={'ahsanzizan - ' + data.title} />
            <ArticleJsonLd url={url} authorName={data.authorName} datePublished={new Date(data.publishDate).toISOString()} publisherName="Ahsan" description="Ahsan's Blog" />
            
            <Navbar contents={navContents} />
            <div className="max-w-5xl mx-auto pt-10 text-secondary px-3">
                <header className="pb-8">
                    <div className="border-b-2 border-gray-400">
                        <h1 className="pb-6 text-center text-2xl font-extrabold leading-9 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">{data.title}</h1>
                    </div>
                    <div className="pb-4 pt-4 flex justify-between text-xs md:text-base">
                        <span className="text-gray-500"><span className="text-secondary">{stringifyDate(data.publishDate)}</span> by <span className="text-main">{data.authorName}</span></span>
                        <p className="text-gray-500"><i className="fa-sharp fa-regular fa-eye"></i><span className="text-secondary"> {data.clicks}</span></p>
                    </div>
                </header>
                <WysiwygViewer ref={viewerRef} content={data.post} />
                <div className="mb-12 mt-24 border-t border-secondary mx-auto block md:flex justify-between items-center py-3">
                    <div className="block">
                        <p className="text-xs md:text-base mb-2">Share</p>
                        <input onClick={copyLink} placeholder="Blog's Link" className="max-w-xs overflow-hidden text-gray-800 px-2 py-1 text-xs md:text-base cursor-pointer bg-white border-2 border-gray-200 text-center rounded" value={url} readOnly />
                        <div className="flex gap-2">
                            <a className="mt-2 px-3 py-2 bg-main rounded-full" href={`https://api.whatsapp.com/send?text=${url}`}><i className="fa-brands fa-whatsapp"></i></a>
                            <a className="mt-2 px-3 py-2 bg-main rounded-full" href={`https://twitter.com/intent/tweet?text=${url}`}><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="max-w-xs flex flex-wrap items-center gap-2 mt-7 md:mt-0">
                        {data.tags ? data.tags.map(tag => {
                            return <Link className="rounded-full border-2 border-white px-2 md:px-3 py-1 text-secondary text-xs md:text-base font-semibold uppercase duration-300 hover:text-cyan-600 hover:bg-secondary mb-2" key={tag} href={"/blog/tags/" + tag}>{tag}</Link>
                        }) : null}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
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
