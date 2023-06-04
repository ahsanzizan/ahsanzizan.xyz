import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <>
            <div className={"sidenav" + (navShow ? " sideActive" : "")}>
                <div className="text-left">
                    {contents.map(content => {
                        if (content.useAL) {
                            return (
                                <Link href={content.href} className={content.mobileClassName} key={content.title} onClick={(e) => {
                                    e.preventDefault();
                                    handleOnClick(content.href, true);
                                }} >
                                    {content.title}
                                </Link>
                            )
                        }
                        
                        return (
                            <a href={content.href} className={content.mobileClassName} key={content.title} onClick={(e) => {
                                e.preventDefault();
                                handleOnClick(content.href, false);
                            }}>
                                {content.title}
                            </a>
                        )
                    })}
                </div>
            </div>
            <header style={{ zIndex: 999, boxShadow: "0 1px 4px rgba(146, 161, 176, 0.15)" }} className="bg-[#222831] sticky top-0 z-50 w-screen mx-auto px-3 py-1 md:px-0 md:py-0">
                <nav className="flex flex-wrap py-1 justify-between lg:px-32">
                    <div className="py-2 mr-5">
                        <Link className="text-main text-lg md:text-xl no-underline font-semibold" href="/">ahsanzizan</Link>
                    </div>
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden" style={{ cursor: "pointer" }}>
                        <a
                            className="flex items-center px-3 py-2 rounded text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                        </a>
                    </div>
                    <div className="w-full hidden md:flex md:flex-row md:items-center md:w-auto">
                        {contents.map(content => {
                            if (content.useAL) {
                                return (
                                    <Link href={content.href} className={content.className} key={content.title} >
                                        {content.title}
                                    </Link>
                                )
                            }

                            return (
                                <a href={content.href} className={content.className} key={content.title} >
                                    {content.title}
                                </a>
                            )
                        })}
                    </div>
                </nav>
            </header>
        </>
    )
}
