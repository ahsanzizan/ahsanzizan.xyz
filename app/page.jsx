"use client"
import React from "react";
import Navbar from "@components/Navbar";
import TypingAnim from "@lib/typingAnim";
import About from "@components/Home/About";
import LandingPage from "@components/Home//LandingPage";
import Portfolio from "@components/Home//Portfolio";
import Contact from "@components/Home//Contact";
import Footer from "@components/Home//Footer";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.navContents = [
            {
                title: 'Home',
                href: '/',

                useAL: true,
            },
            {
                title: 'About',
                href: '#about',
            },
            {
                title: 'Portfolio',
                href: '#portfolio',

            },
            {
                title: 'Contact',
                href: '#contact',
            },
            {
                title: 'Blog',
                href: '/blog',
                useAL: true,
            }
        ];

        this.handleScroll = () => {
        const isScrolled = document.documentElement.scrollTop > 120;

        document.getElementsByTagName('body')[0].classList.toggle('bg-black', isScrolled);
        document.getElementsByTagName('body')[0].classList.toggle('bg-white', !isScrolled);

        document.getElementById('navbar').classList.toggle('text-white', isScrolled);
        document.getElementById('navbar').classList.toggle('bg-black', isScrolled);
        document.getElementById('navbar').classList.toggle('text-black', !isScrolled);
        document.getElementById('toggle').classList.toggle('text-white', isScrolled);
        document.getElementById('toggle').classList.toggle('text-black', !isScrolled);

        const headings = document.getElementsByClassName('heading-text');
        for (const heading of headings) {
          heading.classList.toggle('text-white', isScrolled);
          heading.classList.toggle('text-black', !isScrolled);
        }
      };
    }

    componentDidMount() {
        const { pathname } = window.location;
        if (pathname === '/') {
            new TypingAnim(document.getElementById('profession'), {
                strings: [
                ' Student.',
                ' Programmer.',
                ' Developer.',
                ' Tech-Enthusiast.',
                'n Indonesian',
                ' Gamer.',
                ' Cat Lover.',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
            });
                
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();

            document.getElementById('cards').onmousemove = (e) => {
                for (const card of document.getElementsByClassName('project-card')) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    }
            };
        }

    }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.getElementsByTagName('body')[0].classList.remove('bg-black');
  }

    render () {
        return (
            <>
                <Navbar contents={this.navContents} />
                <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
                    <LandingPage />
                    <About />
                    <Portfolio />
                    <Contact />
                </main>
                <Footer />
            </>
        )
    }
}