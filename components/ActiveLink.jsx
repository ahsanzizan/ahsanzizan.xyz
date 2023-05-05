import { useRouter } from "next/router";

export default function ActiveLink({ children, href, className }) {
    const router = useRouter();
    function handleOnClick(e) {
        e.preventDefault();
        router.push(href);
    }
    
    return (
        <a href={href} className={className} onClick={handleOnClick}>
            {children}
        </a>
    )
}