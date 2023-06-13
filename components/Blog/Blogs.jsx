"use client"
import Preview from "./Preview";

export default function Blogs({ blogs }) {
    const blogsToShow = blogs.slice(0, 16);

    return (
        <>
            <div className="flex flex-col divide-y-2">
                {blogsToShow.map((blog, index) => (
                    <Preview key={blog._id} data={blog} />
                ))}
            </div>
        </>
    )
}