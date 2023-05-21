import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import Search from "@/components/Search";

export default function HomePage({ data }) {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => setPopularBlogs(data.sort((a, b) => b.publishDate - a.publishDate)), []);
  const [searchRes, setSearchRes] = useState([]);

  return (
    <>
      <Header title={"ahsanzizan - Blogs"} description={"Personal Blog"}/>
      <Navbar />
      <div className="text-secondary px-5 lg:px-48 pt-12" id="main__section">
        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-3"><span className="text-main hover:underline underline-offset-4"><a href="https://ahsanzizan.github.io/">ahsanzizan</a></span> - Blogs</h1>
        <p className="text-base md:text-lg"><a className="text-main hover:underline font-semibold" href="https://instagram.com/ahsanzizan">@ahsanzizan</a> made this website because he wanted to share his thought on things to other people, and he thought a blog would fit perfectly.</p>
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
