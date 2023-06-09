"use client"
import React from "react";
import Navbar from "../Navbar";
import TypingAnim from "@lib/typing-anim";
import About from "@components/Home/About";

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
                title: 'Projects',
                href: '#projects',

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
            strings: [' Student.', ' Programmer.', ' Developer.', ' Tech-Enthusiast.', ' Gamer.'],
            autoStart: true,
            loop: true,
            delay: 100,
        });

        if (document.documentElement.scrollTop > 0) {
            document.getElementById('main').classList.add('bg-black');
            document.getElementById('main').classList.remove('bg-white');
            
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
            if (document.documentElement.scrollTop > 0) {
                document.getElementById('main').classList.add('bg-black');
                document.getElementById('main').classList.remove('bg-white');
                
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
            } else if (document.documentElement.scrollTop === 0) {
                document.getElementById('main').classList.add('bg-white');
                document.getElementById('main').classList.remove('bg-black');
                
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
    }

    render () {
        return (
            <>
                <Navbar contents={this.navContents} />
                <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out bg-white" id="main">
                    <section className="text-black pt-14" id="home">
                        <h1 className="heading-text text-[12vw] md:text-[6vw]">
                            <span className="animate slide delay-2">Welcome to<br /></span>
                            <span className="animate slide delay-3">Ahsan Azizan{"'"}s Personal Website</span>
                        </h1>

                        <a href="#about">
                            <div className="bg-black to-content" id="to-content"></div>
                        </a>
                    </section>

                    <About />
                    {/* <About />
                    <Projects />
                    <ContactForm /> */}
                </main>
            </>
        )
    }
}