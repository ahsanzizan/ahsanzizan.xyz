import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import Search from "@/components/Search";
import Link from "next/link";

export default function HomePage({ data }) {
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
        href: '/blog/months',
        className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
        mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
        useAL: true,
    },
  ]
  const [blogs, setBlogs] = useState([]);
  useEffect(() => setBlogs(data.sort((a, b) => b.publishDate - a.publishDate)), []);
  const [searchRes, setSearchRes] = useState([]);

  return (
    <>
      <Header title={"ahsanzizan - Blogs"} description={"Personal Blog"}/>
      <Navbar contents={navContents} />
      <div className="px-5 lg:px-32 pt-12" id="main__section">
        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-3 text-secondary"><Link href="/" className="text-main hover:underline">ahsanzizan</Link> - Blogs</h1>
        <p className="text-lg md:text-xl text-secondary"><a className="text-main hover:underline font-semibold" href="https://instagram.com/ahsanzizan">@ahsanzizan</a> made this website because he wanted to share his thought on things to other people, and he thought a blog would fit perfectly.</p>
      </div>
      <Search articles={data} setResults={setSearchRes} results={searchRes} />
      <div className="mt-20">
        <Blogs data={blogs} />
      </div>
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
