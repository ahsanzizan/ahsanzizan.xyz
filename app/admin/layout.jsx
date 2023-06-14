import Navbar from "@components/Navbar";
import { getRequestCookie } from "@lib/getRequestCookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Admin - ahsanzizan",
    description: "Ahsan's Personal Blog",
}

export default async function BlogLayout ({ children }) {
    const navContents = [
        {
            title: 'Home',
            href: '/',
            useAL: true,
        },
        {
            title: 'Admin',
            href: '/admin',
            useAL: true,
        },
        {
            title: 'Logout',
            href: '/api/logout',
            useAL: true,
        },  
    ];

    const admin = await getRequestCookie(cookies());
    if (!admin) {
        redirect('/login');
    }
    
    return (
        <>
            <Navbar contents={navContents} />
            {children}
        </>
    )
}