import ActiveLink from "@/components/ActiveLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Months() {
    return (
        <>
            <Header title={"Tags Collection"} />
            <Navbar />
            <div className="block">
                <h1 className="text-center pt-10 pb-5 font-bold text-secondary text-2xl">Sort by Month Published</h1>
                <div className="w-full mx-auto items-center justify-center max-w-3xl pt-5 px-6 flex flex-wrap">
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/january"}>January</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/february"}>February</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/march"}>March</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/april"}>April</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/may"}>May</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/june"}>June</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/july"}>July</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/august"}>August</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/september"}>September</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/october"}>October</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/november"}>November</ActiveLink>
                    <ActiveLink className="my-2 rounded-full border-2 border-white px-3 py-1 text-secondary font-semibold mr-3 uppercase duration-300 hover:text-cyan-600 hover:bg-secondary" href={"/december"}>December</ActiveLink>
                </div>
            </div>
            <Footer />
        </>
    )
}
