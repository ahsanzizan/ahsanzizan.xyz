import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import Search from "@/components/Search";

export default function HomePage({ data }) {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => setPopularBlogs(data.sort((a, b) => b.clicks - a.clicks).slice(0, 10)), []);
  const [searchRes, setSearchRes] = useState([]);
  
  return (
    <>
      <Header title={"ahsanAazizan - Blog"} description={"Personal Blog"}/>
      <Navbar />
      <div className="text-secondary px-5 md:px-48 pt-12">
        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-3"><span className="text-main">{"ahsanAazizan"}</span> - Blog</h1>
        <p className="text-base md:text-lg">I made this website because i wanted to share my thought on things to other people, and i thought a blog would fit perfectly.</p>
      </div>
      <Search articles={data} setResults={setSearchRes} results={searchRes} />
      <div className="mt-20">
        <Blogs data={popularBlogs} />
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const connectDB = await clientProm;
  var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();

  return {
      props: {
          data: JSON.parse(JSON.stringify(getBlogs)).filter(blog => !blog.link.includes('private')),
      }
  }
}
