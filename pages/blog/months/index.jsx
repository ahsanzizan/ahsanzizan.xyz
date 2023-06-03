import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Months() {
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
                <h1 className="text-center pt-10 pb-5 font-bold text-secondary text-2xl">Sort by Month Published</h1>
                <div className="w-full mx-auto items-center justify-center max-w-3xl pt-5 px-6 flex flex-wrap">
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/january"}>January</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/february"}>February</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/march"}>March</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/april"}>April</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/may"}>May</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/june"}>June</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/july"}>July</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/august"}>August</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/september"}>September</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/october"}>October</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/november"}>November</Link>
                    <Link className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/blog/months/december"}>December</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
