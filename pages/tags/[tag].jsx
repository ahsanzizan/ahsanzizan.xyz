import Blogs from "@/components/Blogs";
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
            <Header title={`Results for tag ${tag}`} description={"Personal Blog"}/>
            <Navbar />
            <h1 className="text-secondary font-semibold text-xl text-center pt-12 px-5">
              {data.length} {data.length > 1 ? "Results" : "Result"} for tag <span className="text-main">{tag}</span>
            </h1>
            <Blogs data={data} />
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
            data: JSON.parse(JSON.stringify(getBlogWithTag.sort((a, b) => b.publishDate - a.publishDate).filter(blog => !blog.link.includes('private')))),
        }
    }
}
