import clientProm from "@lib/mongodb"
import Link from "next/link";

export default async function Tags() {
    const connectDB = await clientProm;
    const blogs = await connectDB.db('personal-blog').collection('blog-post').find({ }).toArray();
    let tags = [];
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
                        return <Link className="text-white hover:text-black animate slide px-2 py-1 uppercase text-sm lg:text-base font-bold transition duration-300 bg-black border-2 border-black hover:bg-white" key={tag} href={"/blog/tags/" + tag}>#{tag}</Link>
                    })}
                </div>
            </main>
        </>
    )
}

export const revalidate = 0;