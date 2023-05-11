import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import clientProm from "@/lib/mongodb";
import { useEffect, useState } from "react";

export default function PopularBlogs({ data }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => setBlogs(data.slice([0, 50])), []);
    const [searchRes, setSearchRes] = useState([]);
    
    return (
        <>
            <Header title={"ahsanAazizan | Search Blogs"} description={"Personal Blog"}/>
            <Navbar />
            <h1 className="text-secondary text-3xl text-center pt-12">
              Search Blogs
            </h1>
            <Search articles={data} setResults={setSearchRes} results={searchRes} />
            <div className="mt-32">
              <Blogs data={blogs} />
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const connectDB = await clientProm;
    var result = (await connectDB.db('personal-blog').collection('blog-post').find({}).toArray());
    return {
      props: {
        data: JSON.parse(JSON.stringify(result.sort((a, b) => b.publishDate - a.publishDate))).filter(blog => !blog.link.includes('private')),
      }
    }
  }