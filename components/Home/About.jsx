import { about } from "@lib/data"
import Link from "next/link"

export default function About() {
    return (
        <>
            <section className="pt-32 2xl:pt-72 text-black" id="about">
                <div className="block">
                    <div className="mb-5">
                        <h4 className="uppercase heading-text tracking-widest border-b-4 border-white py-2 w-28 md:w-32 text-base md:text-lg">About Me</h4>
                    </div>
                    <div className="block">
                        <div className="mb-8">
                            <h1 className="text-white font-black uppercase transition duration-300 text-sm xs:text-sm sm:text-lg md:text-4xl mb-3">
                                I am Ahsan, <span className="bg-white text-black px-1">a<span id="profession"></span></span>
                            </h1>
                            <p className="text-[#c8c8c8fc] uppercase tracking-widest font-bebas xs:text-sm sm:text-base md:text-lg 2xl:text-2xl">{about.aboutDescription}</p>
                        </div>
                        <div className="block mt-10">
                            <h4 className="uppercase font-extrabold text-white py-3 tracking-widest w-72 md:w-80 text-sm md:text-base">Get In Touch</h4>
                            <div className="flex flex-wrap gap-3 md:gap-5">
                                <Link href={'https://github.com/ahsanzizan'} className="text-base sm:text-lg 2xl:text-2xl transition duration-300 font-extrabold uppercase text-[#c8c8c8fc] hover:text-white tracking-tighter">
                                    Github<span className="text-white text-xl md:text-3xl">.</span>
                                </Link>
                                <Link href={'https://instagram.com/ahsanzizan'} className="text-base sm:text-lg 2xl:text-2xl transition duration-300 font-extrabold uppercase text-[#c8c8c8fc] hover:text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    Instagram<span className="text-transparent text-xl md:text-3xl">.</span>
                                </Link>
                                <Link href={'https://twitter.com/ahsanz461'} className="text-base sm:text-lg 2xl:text-2xl transition duration-300 font-extrabold uppercase text-[#c8c8c8fc] hover:text-sky-500 tracking-tighter">
                                    Twitter<span className="text-sky-500 text-xl md:text-3xl">.</span>
                                </Link>
                                <Link href={'https://www.youtube.com/@jetto_curvarine'} className="text-base sm:text-lg 2xl:text-2xl transition duration-300 font-extrabold uppercase text-[#c8c8c8fc]  hover:text-red-500 tracking-tighter">
                                    YouTube<span className="text-red-500 text-xl md:text-3xl">.</span>
                                </Link>
                                <Link href={'https://www.linkedin.com/in/ahsan-azizan-33908b250/'} className="text-base sm:text-lg 2xl:text-2xl transition duration-300 font-extrabold uppercase text-[#c8c8c8fc]  hover:text-blue-500 tracking-tighter">
                                    LinkedIn<span className="text-blue-500 text-xl md:text-3xl">.</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}