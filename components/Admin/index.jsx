"use client"

import { stringifyDate } from "@lib/stringifyDate";
import Link from "next/link";
import Router from "next/router";

export default function Admin({ blogs, adminName }) {
    async function deleteBlog(id) {
        const confirmed = confirm("Are you sure to delete this post?");
        if (!confirmed) return;
        const deleteBlog = await fetch('/api/delete-blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then(x => x.json());
        
        if (deleteBlog.status == 200) {
            alert(deleteBlog.message);
            window.location.href = '/admin/';
        } else alert(`Failed to delete post\n\nerror: ${deleteBlog.error}`);
    }

    return (
        <>
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl py-32">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <h1 className="text-black heading-text text-3xl mt-10">
                                    Welcome back! Admin <span className="text-white bg-black px-3">{adminName}</span>
                                </h1>
                                <div className="py-5">
                                    <Link href="/admin/edit/new" className="uppercase font-extrabold w-full bg-black border-2 border-black hover:bg-transparent text-center py-3 mb-5 text-white hover:text-black transition duration-300" type="button">
                                        New Post
                                    </Link>
                                    <table className="min-w-full bg-black text-white">
                                        <thead className="shadow-xl border-t-2 border-l-2 border-r-2 border-main">
                                            <tr>
                                                <th scope="col" className="font-semibold text-sm px-1 text-left">
                                                    No.
                                                </th>
                                                <th scope="col" className="font-semibold text-sm px-5 py-4 text-left max-w-[200px]">
                                                    Title
                                                </th>
                                                <th scope="col" className="font-semibold text-sm px-5 py-4 text-left max-w-[200px]">
                                                    Publish Date
                                                </th>
                                                <th scope="col" className="font-semibold text-sm px-5 py-4 text-left">
                                                    Views
                                                </th>
                                                <th scope="col" className="font-semibold text-sm px-5 py-4 text-left">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {blogs.map((blog, i) => {
                                                return <tr key={i} className="border-b transition duration-300 ease-in-out">
                                                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[210px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{blog.title}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[240px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{stringifyDate(blog.publishDate)}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {blog.clicks}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Link href={"/blog/view/" + blog.link} className="px-3 mx-3 uppercase font-extrabold w-full bg-black border-2 border-black hover:bg-transparent text-center py-3 mb-5 text-white hover:text-black transition duration-300">
                                                            View
                                                        </Link>
                                                        <Link href={"/admin/edit/" + blog.link} className="px-3 mx-3 uppercase font-extrabold w-full bg-black border-2 border-black hover:bg-transparent text-center py-3 mb-5 text-white hover:text-black transition duration-300">
                                                            Edit
                                                        </Link>
                                                        <button onClick={() => deleteBlog(blog._id)} className="px-3 mx-3 uppercase font-extrabold bg-black border-2 border-black hover:bg-transparent text-center py-3 mb-5 text-white hover:text-black transition duration-300" type="button">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}