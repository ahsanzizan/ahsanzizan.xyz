import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function monthly() {
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

    return (
        <>
            <Header title={"Tags Collection"} />
            <Navbar contents={navContents} />
            <div className="block">
                <h1 className="text-center pt-10 pb-5 font-bold text-secondary text-2xl">Sort by Month Published</h1>
                <div className="w-full mx-auto items-center justify-center max-w-3xl pt-5 px-6 flex flex-wrap">
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/january"}>January</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/february"}>February</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/march"}>March</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/april"}>April</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/may"}>May</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/june"}>June</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/july"}>July</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/august"}>August</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/september"}>September</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/october"}>October</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/november"}>November</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/monthly/december"}>December</Link>
                </div>
            </div>
        </>
    )
}
