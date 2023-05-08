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
  var res = getBlogs.sort((a, b) => a.clicks - b.clicks).slice(0, 5);

  return {
      props: {
          data: JSON.parse(JSON.stringify(res)).filter(blog => !blog.link.includes('private')),
      }
  }
}
