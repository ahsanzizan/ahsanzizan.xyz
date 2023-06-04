import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import Link from "next/link";

export default function Tags({ data }) {
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
            href: '/blog/months',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]

    return (
        <>
            <Header title={"Tags Collection"} />
            <Navbar contents={navContents} />
            <div className="block">
                <h1 className="text-center pt-10 pb-5 font-bold text-secondary text-2xl">Tags Collection</h1>
                <div className="w-full mx-auto items-center justify-center max-w-3xl pt-5 px-6 flex flex-wrap">
                    {data.map((tag) => {
                        return <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" key={tag} href={"/blog/tags/" + tag}>{tag}</Link>
                    })}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const connectDB = await clientProm;
    var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    var tags = getBlogs.filter(x => !x.link.includes('private')).map(blog => blog.tags);
    var res = [];

    for (var i of tags) {
        res = res.concat(i);
    }

    return {
        props: {
            data: res.filter((value, index, array) => array.indexOf(value) === index),
        }
    }
}