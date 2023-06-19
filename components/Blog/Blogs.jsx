"use client"
import Preview from "./Preview";

export default function Blogs({ blogs }) {
    const blogsToShow = blogs.slice(0, 16);

    return (
        <>
            <div className="flex flex-col divide-y-2 divide-black">
                {blogsToShow.map((blog) => (
                    <Preview key={blog._id} data={blog} />
                ))}
            </div>
        </>
    )
}