import Image from "next/image";

export default function LandingPage() {
    return (
        <section className="text-black pt-14" id="home">
            <h1 className="heading-text tracking-tighter text-[12vw] md:text-[6vw] animate slide">
                Welcome to<br />
                Ahsan Azizan{"'"}s Personal Website
            </h1>
            <a href="#about" className="pt-[12vw] text-black">
                <div className="bg-black to-content" id="to-content"></div>
            </a>
        </section>
    )
}