import BlogPreview from "./BlogPreview";

export default function Blogs({ data }) {
    return (
        <>
            <div className="mx-auto px-5 md:px-48">
                <div className="flex flex-col justify-between">
                    <div className="text-base mx-auto pt-5">
                        <ul className="block">
                            {data.map(blog => {
                                return <BlogPreview
                                    title={blog.title}
                                    publishDate={blog.publishDate}
                                    tags={blog.tags}
                                    previewText={blog.post.slice(0, 250) + "..."}
                                    link={blog.link}
                                    views={blog.clicks}
                                    key={blog._id} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}