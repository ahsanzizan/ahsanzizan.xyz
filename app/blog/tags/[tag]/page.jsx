import BlogPage from "@components/Blog/BlogPage";
import clientProm from "@lib/mongodb";

export default async function BlogWithTag({ params }) {
    const connectDB = await clientProm;
    const blogsWithTag = await connectDB.db('personal-blog').collection('blog-post').find({ tags: params.tag }).toArray();
    const blogs = JSON.parse(JSON.stringify(blogsWithTag));

    return (
        <>
            <BlogPage blogs={blogs.sort((a, b) => b.publishDate - a.publishDate)} title={`#${params.tag} Blogs`} />
        </>
    )
}

export const revalidate = 0;