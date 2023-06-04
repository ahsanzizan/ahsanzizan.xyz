import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ data }) {
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
            title: 'Monthly',
            href: '/blog/monthly',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]

    const router = useRouter();
    const [author, setAuthor] = useState("");
    const [blogs, setBlogs] = useState([]);
    useEffect(() => setBlogs(data.sort((a, b) => b.publishDate - a.publishDate)), []);
    useEffect(() => setAuthor(router.query.author), []);

    function checkAuthor() {
        if (blogs.length !== 0) {
            return <>{blogs.length} {blogs.length > 1 ? "blogs" : "blog"} by <span className="text-main">{author}</span></>
        } else {
            return <>Author named {author} {"doesn't"} exist</>
        }
    }

    return (
        <>
            <Header title={"ahsanzizan - Blogs"} description={"Personal Blog"}/>
            <Navbar contents={navContents} />
            <h1 className="text-secondary text-3xl text-center pt-12">
                {checkAuthor()}
            </h1>
            <Blogs data={blogs} />
        </>
    )
}

export async function getServerSideProps({ query }) {
    var { author } = query;
    const connectDB = await clientProm;
    const getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    const sorted = getBlogs.filter(blog => author === blog.authorName);

    return {
        props: {
            data: JSON.parse(JSON.stringify(sorted.sort(blog => !blog.link.includes('private')))),
        }
    }
}