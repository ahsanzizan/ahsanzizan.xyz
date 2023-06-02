import Image from "next/image";

export default function Projects() {
    return (
        <section className="section" id="projects">
            <h2 className="section-title">Projects</h2>

            <div className="project__container bd-grid">
                <a href="https://github.com/ahsanzizan/personal-blog" className="project__img">
                    <Image src="/projects/personal-blog.png" alt="" width={120} height={300} unoptimized />
                </a>
                <a href="https://github.com/ahsanzizan/next-shortener" className="project__img" >
                    <Image src="/projects/url-shortener.png" alt="" width={120} height={300} unoptimized />
                </a>
                <a href="https://l.ahsanzizan.xyz/py-discord-bot" className="project__img" >
                    <Image src="/projects/discord-bot.png" alt="" width={120} height={300} unoptimized />
                </a>
            </div>
        </section>
    )
}