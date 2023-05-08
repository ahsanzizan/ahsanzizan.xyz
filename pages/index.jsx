import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";

export default function HomePage({ data }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => setBlogs(data), []);

  return (
    <>
      <Header title={"ahsanAazizan | Blog"} description={"Personal Blog"}/>
      <Navbar />
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
