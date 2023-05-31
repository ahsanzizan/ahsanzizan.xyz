import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
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
            title: 'Months',
            href: '/blog/months',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Admin',
            href: '/blog/admin',
            className: 'ml-7 border-2 px-3 rounded text-secondary hover:bg-main text-lg font-semibold',
            mobileClassName: 'text-secondary text-lg hover:text-main font-semibold',
            useAL: true,
        }
    ]

    const router = useRouter();
    const [month, setMonth] = useState("");
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const months = ['january', 'february', 'march', 'april', 'may', 'june',
     'july', 'august', 'september', 'october', 'november', 'december'];
        const newMonth = months.includes(router.query.month) ? router.query.month.charAt(0).toUpperCase() + router.query.month.slice(1) + " Blogs" : "Invalid Query";
        setMonth(newMonth);
    }, []);
    useEffect(() => setBlogs(data.sort((a, b) => b.publishDate - a.publishDate)), []);

    return (
        <>
            <Header title={"ahsanzizan - Blogs"} description={"Personal Blog"}/>
            <Navbar contents={navContents} />
            <h1 className="text-secondary text-3xl text-center pt-12">
                {month}
            </h1>
            <Blogs data={blogs} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ query }) {
    var { month } = query;
    const connectDB = await clientProm;
    const getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
     'july', 'august', 'september', 'october', 'november', 'december'];
    const sorted = getBlogs.filter(blog => month === months[new Date(blog.publishDate).getMonth()]);
    

    return {
        props: {
            data: JSON.parse(JSON.stringify(sorted.sort(blog => !blog.link.includes('private')))),
        }
    }
}