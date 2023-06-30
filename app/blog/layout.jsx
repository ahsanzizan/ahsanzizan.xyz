import Navbar from "@components/Navbar";

export const metadata = {
    title: "Blog - ahsanzizan",
    description: "Ahsan's Personal Blog",
}

export default function BlogLayout ({ children }) {
    const navContents = [
        {
            title: 'Home',
            href: '/blog',
            useAL: true,
        },
        {
            title: 'Tags',
            href: '/blog/tags',
            useAL: true,
        },  
    ];

    return (
        <>
            <Navbar contents={navContents} />
            {children}
        </>
    )
}