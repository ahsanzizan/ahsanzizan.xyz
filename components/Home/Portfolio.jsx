import { awardsAndCertificates, schools, projects } from '@lib/data';
import Link from "next/link";

export default function Projects() {
    return (
        <section id="portfolio" className="pt-32 2xl:pt-72 text-black">
            <div className="mb-5">
                <h4 className="uppercase heading-text tracking-widest border-b-4 border-white py-2 w-32 md:w-[8.5rem] text-base md:text-lg">Portfolio</h4>
            </div>
            <div className="flex flex-wrap gap-2 max-w-[1980px] items-center" id="cards">
                {projects.map((project, i) => {
                    return (
                        <Link className="project-card" href={project.url} key={i}>
                            <div className="card-content">
                                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <h1 className="text-center tracking-wider text-white uppercase font-bold text-2xl">{project.name}</h1>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="mt-10 block max-w-[1980px] items-center">
                <h4 className="uppercase heading-text tracking-widest py-2 w-72 md:w-80 text-sm sm:text-base md:text-lg">Certificates & Awards</h4>
                <ul className="flex flex-wrap gap-5 mt-5">
                    {awardsAndCertificates.map((item, index) => <li key={index}><a href={item.url} className='transition duration-300 text-white text-sm sm:text-lg hover:text-[#c8c8c8fc] font-bebas w-48 tracking-wider'>{item.name}</a></li>)}
                </ul>
            </div>
            <div className="mt-10 block max-w-[1980px] items-center">
                <h4 className="uppercase heading-text tracking-widest py-2 w-72 md:w-80 text-sm sm:text-base md:text-lg">Education & Experience</h4>
                <ul className="flex flex-wrap gap-5 mt-5">
                    {schools.map((item, index) => <li key={index}><a href={item.url} className='transition duration-300 text-white text-sm sm:text-lg hover:text-[#c8c8c8fc] font-bebas w-48 tracking-wider'>{item.name}</a></li>)}
                </ul>
            </div>
        </section>
    )
}