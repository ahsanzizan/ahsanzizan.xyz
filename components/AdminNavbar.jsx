import { useState } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function AdminNavbar() {
    const [navShow, toggleNav] = useState(false);

    return (
        <>
            <div className={"sidenav" + (navShow ? " sideActive" : "")}>
                <div className="text-left">
                    <ActiveLink href="/admin" className="mx-3 text-secondary hover:text-main text-lg">
                        Home
                    </ActiveLink>
                    <ActiveLink href="/admin/deleted-post" className="mx-3 text-secondary hover:text-main text-lg">
                        Deleted Post
                    </ActiveLink>
                    <ActiveLink href="/admin/blogs" className="mx-3 text-secondary hover:text-main text-lg">
                        All Blogs
                    </ActiveLink>
                </div>
            </div>
            <section style={{ zIndex: 999 }} className="bg-[#2b3038] sticky top-0 z-50 w-screen mx-auto px-4 h-16">
                <nav className="flex flex-wrap p-3 justify-between ">
                    <div className="h-10 mr-5">
                        <ActiveLink className="text-main text-2xl no-underline font-sans font-bold" href="/">ahsanAazizan</ActiveLink>
                    </div>
                    <div onClick={() => toggleNav(!navShow)} className="block md:hidden" style={{ cursor: "pointer" }}>
                        <a
                            className="flex items-center px-3 py-2 rounded text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                        </a>
                    </div>
                    <div className="navbar w-full hidden md:flex md:flex-row md:items-center md:w-auto">
                        <div className="text-sm md:flex-grow"></div>
                        <ActiveLink href="/admin" className="mx-3 text-secondary hover:text-main text-lg">
                            Home
                        </ActiveLink>
                        <Link href="/api/logout" className="mx-3 text-secondary hover:text-main text-lg">
                            Logout
                        </Link>
                    </div>
                </nav>
            </section>
        </>
    )
}