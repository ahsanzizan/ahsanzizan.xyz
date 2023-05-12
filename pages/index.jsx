import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

export default function HomePage({ popular, recent }) {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  useEffect(() => setPopularBlogs(popular), []);
  useEffect(() => setRecentBlogs(recent), []);

  return (
    <>
      <Header title={"ahsanAazizan | Blog"} description={"Personal Blog"}/>
      <Navbar />
      <div className="border-b-4 pb-10">
        <h1 className="text-secondary text-3xl text-center pt-12">
          Popular Blogs
        </h1>
        <Blogs data={popularBlogs} />
      </div>
      <h1 className="text-secondary text-3xl text-center pt-12">
        Recently Uploaded
      </h1>
      <Blogs data={recentBlogs} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const connectDB = await clientProm;
  var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
  var popularBlogs = getBlogs.sort((a, b) => b.clicks - a.clicks).slice(0, 3);
  var recentlyPosted = getBlogs.sort((a, b) => b.publishDate - a.publishDate).slice(0, 5);

  return {
      props: {
          popular: JSON.parse(JSON.stringify(popularBlogs)).filter(blog => !blog.link.includes('private')),
          recent: JSON.parse(JSON.stringify(recentlyPosted)).filter(blog => !blog.link.includes('private')),
      }
  }
}
