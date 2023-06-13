import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    function handleOnSubmit(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICEID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY)
        .then((result) => {
            alert(`Status: ${result.text}\nEmail sent to Ahsan`);
            window.location.reload();
        }, (error) => {
            alert(error.text);
        });
    }

    return (
        <section id="contact" className="pt-24 2xl:pt-72 text-black">
            <div className="mb-5">
                <h4 className="uppercase heading-text tracking-widest border-b-4 border-white py-2 w-36 md:w-40 text-base md:text-lg">Contact Me</h4>
            </div>
            <div className="flex flex-wrap gap-16">
                <form className="w-full max-w-lg md:max-w-2xl animate slide" ref={form} onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-extrabold mb-2">
                                Name
                            </label>
                            <input className="font-bebas tracking-widest appearance-none block w-full font-bold bg-transparent text-white border-2 border-transparent border-b-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" type="text" placeholder="Your Name" name="user_name" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-extrabold mb-2">
                                Email
                            </label>
                            <input className="font-bebas tracking-widest appearance-none block w-full font-bold bg-transparent text-white border-2 border-transparent border-b-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" type="email" placeholder="Your Email" name="user_email" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-extrabold mb-2">
                                Message
                            </label>
                            <textarea className="font-bebas tracking-widest appearance-none block w-full font-bold bg-transparent h-52 text-white border-2 border-transparent border-b-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white" type="text" placeholder="Message" name="message" required />
                        </div>
                    </div>
                    <button type="submit" className="uppercase font-extrabold w-full h-14 bg-white border-2 border-white hover:bg-transparent hover:text-white transition duration-300">Send Message</button>
                </form>
                <Image src={'/me.jpg'} width={75} height={75} alt="me" className="object-cover animate slide delay-3 w-0 xl:w-80" quality={100} unoptimized />
            </div>
        </section>
    )
}