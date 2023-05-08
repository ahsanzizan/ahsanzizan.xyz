import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search/Search";
import clientProm from "@/lib/mongodb";
import { useEffect, useState } from "react";

export default function PopularBlogs({ data }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => setBlogs(data), []);
    const [searchRes, setSearchRes] = useState([]);
    
    return (
        <>
            <Header title={"ahsanAazizan | Popular Blog"} description={"Personal Blog"}/>
            <Navbar />
            
            <Search articles={blogs} setResults={setSearchRes} results={searchRes} />
            <Blogs data={blogs} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const connectDB = await clientProm;
    var result = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    return {
      props: {
        data: JSON.parse(JSON.stringify(result.sort((a, b) => b.pubDate - a.pubDate))).filter(blog => !blog.link.includes('private')),
      }
    }
  }