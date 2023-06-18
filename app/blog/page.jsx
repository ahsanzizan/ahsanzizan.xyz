import BlogPage from "@components/Blog/BlogPage";
import clientProm from "@lib/mongodb";

export default async function Blog() {
    const connectDB = await clientProm;
    const blogs = JSON.parse(JSON.stringify((await connectDB.db('personal-blog').collection('blog-post').find({}).toArray()).filter(blog => !blog.link.includes('private'))));
    
    return (
        <>
            <BlogPage blogs={blogs.sort((a, b) => b.publishDate - a.publishDate)} title={'Blog'} />
        </>
    )
}