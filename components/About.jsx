import Image from "next/image";

export default function About() {
    return (
        <section className="about" id="about">
                <h2 className="section-title">About</h2>
                <div className="flex flex-col md:flex-row text-center justify-center items-center gap-10">
                    <div className="rounded-full overflow-hidden w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                        <Image src="/about.png" alt="" width={300} height={300} unoptimized />
                    </div>
                    
                    <div className="text-secondary max-w-lg text-center md:text-left px-5">
                        <h2 className="font-bold text-2xl mb-3">{"I'm"} <span className="text-main">Ahsan Awadullah Azizan</span></h2>
                        <p className="text-base leading-5">My name is Ahsan Awadullah Azizan, people often call me Ahsan. {"I'm"} currently living in Malang, but i originally live in Tangerang Selatan. {"I'm"} a student at SMK Telkom Malang, majoring in Software Engineering. My hobbies are coding, gaming, and football.</p>
                    </div>                                   
                </div>
        </section>
    )
}