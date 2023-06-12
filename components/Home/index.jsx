"use client"
import React from "react";
import Navbar from "../Navbar";
import TypingAnim from "@lib/typing-anim";
import About from "./About";
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

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
    }

    componentDidMount() {
        new TypingAnim(document.getElementById("profession"), {
            strings: [' Student.', ' Programmer.', ' Developer.', ' Tech-Enthusiast.', 'n Indonesian', ' Gamer.', ' Cat Lover.'],
            autoStart: true,
            loop: true,
            delay: 100,
        });

        if (document.documentElement.scrollTop > 150) {
            document.getElementsByTagName('body')[0].classList.add('bg-black');
            document.getElementsByTagName('body')[0].classList.remove('bg-white');
            
            document.getElementById('navbar').classList.add('text-white');
            document.getElementById('navbar').classList.add('bg-black');
            document.getElementById('navbar').classList.remove('text-black');

            document.getElementById('toggle').classList.add('text-white');
            document.getElementById('toggle').classList.remove('text-black');

            document.getElementById('toggle').classList.add('text-white');
            document.getElementById('toggle').classList.remove('text-black');

            const headings = document.getElementsByClassName('heading-text');
            for (var i of headings) {
                i.classList.remove('text-black');
                i.classList.add('text-white');
            }
        }
        
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 150) {
                document.getElementsByTagName('body')[0].classList.add('bg-black');
                document.getElementsByTagName('body')[0].classList.remove('bg-white');
                
                document.getElementById('navbar').classList.add('text-white');
                document.getElementById('navbar').classList.add('bg-black');
                document.getElementById('navbar').classList.remove('text-black');
    
                document.getElementById('toggle').classList.add('text-white');
                document.getElementById('toggle').classList.remove('text-black');
                
                const headings = document.getElementsByClassName('heading-text');
                for (var i of headings) {
                    i.classList.remove('text-black');
                    i.classList.add('text-white');
                }
            } else if (document.documentElement.scrollTop <= 150) {
                document.getElementsByTagName('body')[0].classList.add('bg-white');
                document.getElementsByTagName('body')[0].classList.remove('bg-black');
                
                document.getElementById('navbar').classList.add('text-black');
                document.getElementById('navbar').classList.remove('text-white');
                document.getElementById('navbar').classList.remove('bg-black');
    
                document.getElementById('toggle').classList.add('text-black');
                document.getElementById('toggle').classList.remove('text-white');
    
                const headings = document.getElementsByClassName('heading-text');
                for (var i of headings) {
                    i.classList.remove('text-white');
                    i.classList.add('text-black');
                }
            }
        }

        document.getElementById('cards').onmousemove = e => {
            for (const card of document.getElementsByClassName('project-card')) {
                const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        }

        
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