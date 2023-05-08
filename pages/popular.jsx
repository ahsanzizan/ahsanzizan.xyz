import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import { useEffect, useState } from "react";

export default function PopularBlogs({ data }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => setBlogs(data), []);

    return (
        <>
            <Header title={"ahsanAazizan | Popular Blog"} description={"Personal Blog"}/>
            <Navbar />
            <h1 className="text-secondary text-3xl text-center pt-12">
                Popular Blogs
            </h1>
            <Blogs data={blogs} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const connectDB = await clientProm;
    var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    var res = getBlogs.sort((a, b) => b.clicks - a.clicks).slice(0, 5);

    return {
        props: {
            data: JSON.parse(JSON.stringify(res)).filter(blog => !blog.link.includes('private')),
        }
    }
}