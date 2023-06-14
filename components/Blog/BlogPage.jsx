"use client"
import { useState } from "react";
import Blogs from "./Blogs";
import Search from "./Search";

export default function BlogPage({ blogs, title }) {
    const [searchRes, setSearchRes] = useState([]);

    return (
        <>
            <Search articles={blogs} results={searchRes} setResults={setSearchRes} />
            <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
                <h1 className="heading-text text-3xl md:text-5xl pb-20">{title}</h1>
                <Blogs blogs={blogs} />
            </main>
        </>
    )
}