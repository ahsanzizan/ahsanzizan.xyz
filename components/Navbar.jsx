import React, { useState } from "react";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
    const [navShow, toggleNav] = useState(false);

    return (
        <>
            <div className={"sidenav" + (navShow ? " sideActive" : "")}>
                <div className="text-left">
                    <ActiveLink href="/" className="text-secondary hover:text-main text-lg">
                        Home
                    </ActiveLink>
                    <ActiveLink href="/tags" className="text-secondary hover:text-main text-lg">
                        Tags
                    </ActiveLink>
                    <ActiveLink href="/older" className="mx-3 text-secondary hover:text-main text-lg">
                        Older
                    </ActiveLink>
                </div>
            </div>
            <header style={{ zIndex: 999, boxShadow: "0 1px 4px rgba(146, 161, 176, 0.15)" }} className="bg-[#222831] sticky top-0 z-50 w-screen mx-auto px-4">
                <nav className="flex flex-wrap py-1 justify-between">
                    <div className="py-2 mr-5">
                        <ActiveLink className="text-main text-base md:text-xl no-underline font-semibold" href="/">ahsanAazizan</ActiveLink>
                    </div>
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden" style={{ cursor: "pointer" }}>
                        <a
                            className="flex items-center px-3 py-2 rounded text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                        </a>
                    </div>
                    <div className="w-full hidden md:flex md:flex-row md:items-center md:w-auto">
                        <div className="text-sm md:flex-grow"></div>
                        <ActiveLink href="/" className="mx-3 text-secondary hover:text-main text-lg">
                            Home
                        </ActiveLink>
                        <ActiveLink href="/tags" className="mx-3 text-secondary hover:text-main text-lg">
                            Tags
                        </ActiveLink>
                        <ActiveLink href="/older" className="mx-3 text-secondary hover:text-main text-lg">
                            Older
                        </ActiveLink>
                    </div>
                </nav>
            </header>
        </>
    )
}
