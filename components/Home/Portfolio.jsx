import Link from "next/link";
import { FaLink } from "react-icons/fa"

export default function Projects() {
    return (
        <section id="portfolio" className="pt-32 2xl:pt-72 text-black">
            <div className="mb-5">
                <h4 className="uppercase heading-text tracking-widest border-b-4 border-red-500 py-2 w-32 md:w-36 text-base md:text-lg">Portfolio</h4>
            </div>
            <div className="flex flex-wrap gap-2 max-w-[1980px] items-center" id="cards">
                <Link className="project-card" href={"#"}>
                    <div className="card-content">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <h1 className="text-center tracking-wider text-white uppercase font-bold text-2xl">Personal URL Shortener</h1>
                        </div>
                    </div>
                </Link>
                <Link className="project-card" href={"#"}>
                    <div className="card-content">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <h1 className="text-center tracking-wider text-white uppercase font-bold text-2xl">Personal Blogging Platform</h1>
                        </div>
                    </div>
                </Link>
                <Link className="project-card" href={"#"}>
                    <div className="card-content">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <h1 className="text-center tracking-wider text-white uppercase font-bold text-2xl">Discord bot</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mt-10 block xl:flex max-w-[1980px] items-center">
                <h4 className="uppercase heading-text tracking-widest py-2 w-36 md:w-44 text-sm md:text-base">Certificates & Awards</h4>
                <ul className="flex flex-wrap gap-5 pl-7">
                    <li><a href="https://www.hackerrank.com/certificates/b047345830aa" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">{"Hackerrank's"} Problem Solving (Basic)</a></li>
                    <li><a href="https://www.kaggle.com/learn/certification/ahsanawadullahazizan/pandas" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">{"Kaggle's"} Pandas</a></li>
                    <li><a href="https://www.kaggle.com/learn/certification/ahsanawadullahazizan/python" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">{"Kaggle's"} Python</a></li>
                    <li><a href="https://www.hackerrank.com/certificates/273a8aca1e96" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">{"Hackerrank's"} Python (Basic)</a></li>
                    <li><a href="https://www.dicoding.com/certificates/RVZKOE034PD5" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">{"Dicoding's"} Cloud Practitioner Essentials</a></li>
                </ul>
            </div>
            <div className="mt-10 block xl:flex max-w-[1980px] items-center">
                <h4 className="uppercase heading-text tracking-widest py-2 w-36 md:w-44 text-sm md:text-base">Education</h4>
                <ul className="flex flex-wrap gap-5 pl-7">
                    <li><a href="https://mtsnegeri3jakarta.sch.id/" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">MTsN 3 Jakarta</a></li>
                    <li><a href="https://smktelkom-mlg.sch.id/" className="text-red-500 hover:underline font-bebas w-48 tracking-wider">SMK Telkom Malang</a></li>
                </ul>
            </div>
        </section>
    )
}