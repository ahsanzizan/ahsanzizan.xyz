import { data, socials } from "@lib/data"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <>
            <section className="pt-32 pb-16 text-black" id="about">
                <div className="flex">
                    <div className="block">
                        <div className="mb-5">
                            <h4 className="uppercase heading-text border-b-4 border-red-500 py-2 w-[5.7rem]">About Me</h4>
                            <h1 className="heading-text text-[4.5vw] md:text-[3.5vw]">
                                I am Ahsan, a <span id="profession" className="text-red-500"></span>
                            </h1>
                        </div>
                        <div className="mb-8">
                            <p className="text-white font-bebas tracking-normal text-[4vw] md:text-[2vw]">{data.aboutDescription}</p>
                        </div>
                        <div className="flex gap-5">
                            <Link href={'https://github.com/ahsanzizan'} className="transition duration-300 font-extrabold uppercase text-gray-300 hover:text-white tracking-tighter">
                                Github<span className="text-white text-[4.5vw] md:text-[2vw]">.</span>
                            </Link>
                            <Link href={'https://instagram.com/ahsanzizan'} className="transition duration-300 font-extrabold uppercase text-gray-300 hover:text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Instagram<span className="text-transparent text-[4.5vw] md:text-[2vw]">.</span>
                            </Link>
                            <Link href={'https://twitter.com/ahsanz461'} className="transition duration-300 font-extrabold uppercase text-gray-300 hover:text-sky-500 tracking-tighter">
                                Twitter<span className="text-sky-500 text-[4.5vw] md:text-[2vw]">.</span>
                            </Link>
                            <Link href={'https://www.youtube.com/@jetto_curvarine'} className="transition duration-300 font-extrabold uppercase text-gray-300  hover:text-red-500 tracking-tighter">
                                YouTube<span className="text-red-500 text-[4.5vw] md:text-[2vw]">.</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}