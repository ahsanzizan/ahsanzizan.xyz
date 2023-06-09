"use client"
import About from "@components/About";
import ContactForm from "@components/ContactForm";
import Projects from "@components/Projects";
import React from "react";
import TypingAnim from "@lib/typing-anim";
import Navbar from "@components/Navbar";
import { FaGripLinesVertical } from "react-icons/fa";
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
            strings: [' Student.', ' Programmer.', ' Developer.', ' Tech-Enthusiast.', ' Gamer.'],
            autoStart: true,
            loop: true,
            delay: 100,
        });

        if (document.documentElement.scrollTop > 5) {
            document.getElementById('main').classList.add('bg-black');
            document.getElementById('main').classList.remove('bg-white');
            
            document.getElementById('navbar').classList.add('text-white');
            document.getElementById('navbar').classList.add('bg-black');
            document.getElementById('navbar').classList.remove('text-black');

            document.getElementById('toggle').classList.add('text-white');
            document.getElementById('toggle').classList.remove('text-black');

            document.getElementById('toggle').classList.add('text-white');
            document.getElementById('toggle').classList.remove('text-black');

            document.getElementsByClassName('heading-text')[0].classList.remove('text-black');
            document.getElementsByClassName('heading-text')[0].classList.add('text-white');
        }

        window.onscroll = () => {
            if (document.documentElement.scrollTop > 5) {
                document.getElementById('main').classList.add('bg-black');
                document.getElementById('main').classList.remove('bg-white');
                
                document.getElementById('navbar').classList.add('text-white');
                document.getElementById('navbar').classList.add('bg-black');
                document.getElementById('navbar').classList.remove('text-black');
    
                document.getElementById('toggle').classList.add('text-white');
                document.getElementById('toggle').classList.remove('text-black');
    
                document.getElementsByClassName('heading-text')[0].classList.remove('text-black');
                document.getElementsByClassName('heading-text')[0].classList.add('text-white');
            }
        }
    }

    render () {
        return (
            <>
                <Navbar contents={this.navContents} />
                <main className="px-5 md:px-24 py-32 transition duration-500 ease-in-out bg-white" id="main">
                    <section className="mb-32 text-black py-16" id="home">
                        <h1 className="heading-text">
                            <span className="animate slide delay-2">Welcome to<br /></span>
                            <span className="animate slide delay-3">Ahsan Azizan{"'"}s Personal Website</span>
                        </h1>

                        <a href="#">
                            <div className="bg-black to-content" id="to-content"></div>
                        </a>
                    </section>

                    {/* <About />
                    <Projects />
                    <ContactForm /> */}
                </main>
            </>
        )
    }
}