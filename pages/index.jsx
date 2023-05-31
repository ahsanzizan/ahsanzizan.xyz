import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TypingAnim from "@/lib/typing-anim";
import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.navContents = [
            {
                title: 'Home',
                href: '/',
                className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
                mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
                useAL: true,
            },
            {
                title: 'Projects',
                href: '#projects',
                className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
                mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            },
            {
                title: 'Contact',
                href: '#contact',
                className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
                mobileClassName: 'text-secondary hover:text-main text-lg font-semibold'
            },
        ];
    }

    

    componentDidMount() {
        // Initiate typing animation
        new TypingAnim(document.getElementById("animate"), {
            strings: ['Student', 'Programmer', 'Developer'],
            autoStart: true,
            loop: true,
            delay: 50,
        });
    }

    render() {
        return (
            <>
                <Header title={"ahsanzizan"} description={"Personal Blog"} />
                <Navbar contents={this.navContents} />

                <main className="l-main">
                    <section className="home bd-grid text-secondary" id="home">
                        <div className="home__data">
                            <h1 className="home__title">Hey There! <br />{"I'm"} <span className="home__title-color">Ahsan Azizan</span>, <br />a <span className="typewrite" id="animate"></span></h1>
                            <Link href="/blog" className="btn">Visit Blog <i className="fa-solid fa-arrow-up-right-from-square icon"></i></Link>
                        </div>

                        <div className="home__social">
                            <a href="https://www.linkedin.com/in/ahsan-azizan-33908b250/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/ahsanzizan" className="home__social-icon"><i className='bx bxl-instagram'></i></a>
                            <a href="https://github.com/ahsanzizan" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                            <a href="https://www.twitter.com/ahsanaz461" className="home__social-icon"><i className='bx bxl-twitter' ></i></a>
                        </div>

                        <div className="home__img">
                            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                                    <image className="home__blob-img" x="70" y="116" href="me.png" />
                                </g>
                            </svg>
                        </div>
                    </section>
                
                    <section className="section" id="projects">
                        <h2 className="section-title">Projects</h2>

                        <div className="project__container bd-grid">
                            <a href="https://github.com/ahsanzizan/personal-blog" className="project__img">
                                <Image src="/projects/personal-blog.png" alt="" width={120} height={300} unoptimized />
                            </a>
                            <a href="https://github.com/ahsanzizan/shorty" className="project__img" >
                                <Image src="/projects/discord-bot.png" alt="" width={120} height={300} unoptimized />
                            </a>
                            <a href="https://github.com/ahsanzizan/python-projects/tree/main/discord-bot" className="project__img" >
                                <Image src="/projects/url-shortener.png" alt="" width={120} height={300} unoptimized />
                            </a>
                        </div>
                    </section>

                    <ContactForm />
                </main>
                
                <footer className="footer">
                    <p className="footer__title">Based In</p>
                    <p className="footer__subtitle">Rempoa, East Ciputat, South Tangerang City, Banten, Indonesia.</p>
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/ahsan-azizan-33908b250/" className="footer__icon"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://www.instagram.com/ahsanaazizan" className="footer__icon"><i className='bx bxl-instagram'></i></a>
                        <a href="https://github.com/ahsanAazizan" className="footer__icon"><i className='bx bxl-github' ></i></a>
                        <a href="https://www.twitter.com/ahsanaz461" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
                    </div>
                    <p className="footer__copy">&copy; 2023 Ahsan Azizan</p>
                </footer>
            </>
        )
    }
}