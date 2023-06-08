"use client"
import About from "@components/About";
import ContactForm from "@components/ContactForm";
import Projects from "@components/Projects";
import React from "react";
import TypingAnim from "@lib/typing-anim";
import Navbar from "@components/Navbar";
import Link from "next/link";


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
        new TypingAnim(document.getElementById("animate"), {
            strings: [' Student.', ' Programmer.', ' Developer.', ' Tech Enthusiast.', ' Gamer.'],
            autoStart: true,
            loop: true,
            delay: 100,
        });
    }

    render () {
        return (
            <>
                <Navbar contents={this.navContents} />
                <main className="px-5 md:px-16 py-32">
                    <section className="mb-32 text-white py-16" id="home">
                        <h1 className="font-extrabold leading-[0.8] tracking-tighter text-[6vw] uppercase animate slide">
                            Hey there!<br /> {"I'm"} Ahsan Azizan,<br /> a<span id="animate"></span>
                        </h1>
                    </section>

                    {/* <About />
                    <Projects />
                    <ContactForm /> */}
                </main>
            </>
        )
    }
}