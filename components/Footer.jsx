import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-5 md:px-24 py-32 transition duration-500 ease-in-out max-w-[1980px] mx-auto">
            <div className="block md:flex justify-between items-center">
                <div className="py-3">
                    <h1 className="heading-text tracking-tighter text-5xl max-w-sm">
                        Based In Indonesia.<br /> <a href="mailto:ahsanaz461@gmail.com" className="footer-link">Email Me</a>
                    </h1>
                </div>
                <div className="py-2">
                    <a className={`font-extrabold uppercase tracking-[0.5em] text-lg text-[#c8c8c8fc] max-w-sm`} href="#">
                        Back to top
                    </a>
                </div>
            </div>
        </footer>
    )    
}