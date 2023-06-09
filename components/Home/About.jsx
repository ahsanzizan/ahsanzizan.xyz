import { data } from "@lib/data"

export default function About() {
    return (
        <>
            <section className="pt-32 pb-16 text-black" id="about">
                <div className="mb-5">
                    <h4 className="uppercase heading-text border-b-4 border-red-500 py-2 w-[5.7rem]">About Me</h4>
                    <h1 className="heading-text text-[4vw] md:text-[3vw]">
                        I am Ahsan, a <span id="profession" className="text-red-500"></span>
                    </h1>
                </div>
                <p className="text-white font-bebas tracking-normal text-[4vw] md:text-[2vw]">{data.aboutDescription}</p>
            </section>
        </>
    )
}