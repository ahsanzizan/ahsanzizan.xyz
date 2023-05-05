import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import clientProm from "@/lib/mongodb";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function HomePage({ data }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => setBlogs(data), []);

  return (
    <>
      <Header title={"ahsanAazizan | Blog"} description={"Personal Blog"}/>
      <Navbar />
      <div className="mx-auto px-6">
        <div className="flex flex-col justify-between">
            <div className="text-base mx-auto pt-5 px-6 sm:px-6 xl:px-0">
                <ul className="block">
                    {blogs.map(blog => {
                        return <BlogPreview
                            title={blog.title}
                            publishDate={blog.pubDate}
                            tags={blog.tags}
                            previewText={blog.post.slice(0, 250) + "..."}
                            link={blog.link}
                            key={blog._id} />
                    })}
                </ul>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ res, query }) {
  const connectDB = await clientProm;
  var result = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(result.sort((a, b) => b.pubDate - a.pubDate))).filter(blog => !blog.link.includes('private') && !blog.tags.includes('private')),
    }
  }
}
