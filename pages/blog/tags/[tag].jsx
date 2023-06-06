import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import { useRouter } from "next/router";

export default function BlogsWithTag({ data }) {
    const navContents = [
        {
            title: 'Home',
            href: '/blog',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Tags',
            href: '/blog/tags',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Monthly',
            href: '/blog/monthly',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]
    const router = useRouter();
    const { tag } = router.query; 

    return (
        <>
            <Header title={`results for tag ${tag}`} description={"Personal Blog"}/>
            <Navbar contents={navContents} />
            <h1 className="text-secondary font-semibold text-xl text-center pt-12 px-5">
              {data.length === 0 ? `No results for ` : `${data.length} results for `} <span className="text-main">#{tag}</span>
            </h1>
            <Blogs data={data} />
        </>
    )
}

export async function getServerSideProps({ query }) {
    const { tag } = query;
    const connectDB = await clientProm;
    const getBlogWithTag = await connectDB.db('personal-blog').collection('blog-post').find({ tags: tag }).toArray();
    const data = JSON.parse(JSON.stringify(getBlogWithTag.sort((a, b) => b.publishDate - a.publishDate).filter(blog => !blog.link.includes('private'))));
    return {
        props: {
            data: data,
        }
    }
}
