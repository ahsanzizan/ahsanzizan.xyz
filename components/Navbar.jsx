"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar({ contents }) {
    const [navShow, toggleNav] = useState(false);
    const router = useRouter();

    function handleOnClick(href, useAL) {
        if (useAL) {
            router.push(href);
        } else {
            const origin =
                typeof window !== 'undefined' && window.location.origin
                ? window.location.origin
                    : '';
                    
            const url = `${origin}`;
            window.location.href = url + href; 
        }
        toggleNav(false);
    }

    return (
        <section className="text-black font-['Bebas_Neue']">
            {/* Small screen */}
            <div className={"my-auto sidenav" + (navShow ? " sideActive" : "")}>
                <a className="text-white text-xl cursor-pointer text-right pr-10 font-sans" onClick={() => toggleNav(!navShow)}>X</a>
                <div className="text-center">
                    {contents.map(content => {
                        if (content.useAL) {
                            return (
                                <Link href={content.href} className="text-white font-bold uppercase tracking-widest pb-1 hover:underline underline-offset-4" key={content.title} onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(content.href, true);
                                }} >
                                    {content.title}
                                </Link>
                            )
                        }
                        
                        return (
                            <a href={content.href} className="text-white font-bold uppercase tracking-widest pb-1 hover:underline underline-offset-4" key={content.title} onClick={(e) => {
                                e.preventDefault();
                                handleOnClick(content.href, false);
                            }}>
                                {content.title}
                            </a>
                        )
                    })}
                </div>
            </div>
            {/* Large screen */}
            <header className="fixed top-0 z-50 w-screen mx-auto py-1 md:px-[1vw] md:py-0 bg-white" id="navbar">
                <nav className="flex flex-wrap py-1 justify-between items-center px-5 md:px-16 md:py-4">
                    <Link href={"/"} className="flex gap-3 items-center">
                        <Image src={"/logo.svg"} width={35} height={35} alt="logo" className="w-10 h-10 md:w-[3vw] md:h-[3vw] animate slide" />
                    </Link>
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden cursor-pointer pr-2 animate slide">
                        <div
                            className="flex items-center py-2 rounded text-black" id="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                        </div>
                    </div>
                    <div className="navbar" id="navbar">
                        {contents.map((content, index) => {
                            if (content.useAL) {
                                return (
                                    <Link href={content.href} className={`font-bold uppercase tracking-widest pb-1 animate slide delay-${index} text-[1.5vw]`} id="nav-link" key={content.title} >
                                        {content.title}
                                    </Link>
                                )
                            }

                            return (
                                <a href={content.href} className={`font-bold uppercase tracking-widest pb-1 animate slide delay-${index} text-[1.5vw]`} id="nav-link" key={content.title} >
                                    {content.title}
                                </a>
                            )
                        })}
                    </div>
                </nav>
            </header>
        </section>
    )
}
