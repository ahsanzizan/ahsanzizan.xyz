import Preview from "@components/Blog/Preview";
import Navbar from "@components/Navbar";
import clientProm from "@lib/mongodb";

export default async function Blog() {
    const connectDB = await clientProm;
    const blogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();

    const navContents = [
        {
            title: 'Home',
            href: '/',
            useAL: true,
        },
        {
            title: 'Blog',
            href: '/blog',
            useAL: true,
        },
        {
            title: 'Tags',
            href: '/blog/tags',
            useAL: true,
        },  
    ];

    return (
        <>
            <Navbar contents={navContents} />
            <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
                <h1 className="heading-text text-5xl">Blog</h1>
                <div className="flex flex-col divide-y-2">
                    {blogs.map((blog) => (
                        <Preview key={blog._id} data={blog} />
                    ))}
                </div>
            </main>
        </>
    )
}