import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import { useRouter } from "next/router";

export default function BlogsWithTag({ data }) {
    const router = useRouter();
    const { tag } = router.query; 

    return (
        <>
            <Header title={"ahsanAazizan | Blog"} description={"Personal Blog"}/>
            <Navbar />
            <div className="mx-auto px-6">
                <div className="flex h-screen flex-col justify-between">
                    <div className="text-base mx-auto pt-5 px-6 sm:px-6 xl:px-0">
                        <h1 className="text-secondary text-center font-semibold py-10 text-2xl">
                            Results for tag <span className="text-main">{tag}</span>
                        </h1>
                        <ul className="block">
                            {data.map(blog => {
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

export async function getServerSideProps({ query }) {
    const { tag } = query;
    const connectDB = await clientProm;
    const getBlogWithTag = await connectDB.db('personal-blog').collection('blog-post').find({ tags: tag }).toArray();
    return {
        props: {
            data: JSON.parse(JSON.stringify(getBlogWithTag.sort((a, b) => b.pubDate - a.pubDate).filter(blog => !blog.link.includes('private')))),
        }
    }
}
