import clientProm from "@lib/mongodb"
import Link from "next/link";

export default async function Tags() {
    const connectDB = await clientProm;
    const blogs = await connectDB.db('personal-blog').collection('blog-post').find({ }).toArray();
    var tags = [];
    for (const i of blogs.filter(blog => !blog.link.includes('private')).map(blog => blog.tags)) {
        tags = tags.concat(i);
    }

    tags = tags.filter((value, index, array) => array.indexOf(value) === index);

    return (
        <>
            <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
                <h1 className="heading-text text-5xl pb-10">#Tags</h1>
                <div className="flex flex-wrap items-center gap-5">
                    {tags.map((tag) => {
                        return <Link className="animate slide px-2 py-1 uppercase text-sm lg:text-base font-bold transition duration-300 bg-[#c8c8c8fc] border-2 border-[#c8c8c8fc] hover:bg-transparent" key={tag} href={"/blog/tags/" + tag}>#{tag}</Link>
                    })}
                </div>
            </main>
        </>
    )
}