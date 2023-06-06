"use client"

import { useRef } from "react";
import emailjs from "@emailjs/browser"; 

export default function ContactForm() {
    const form = useRef();

    function handleContactSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_ygjl8cd', 'template_5bf2f44', form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY)
        .then((result) => {
            alert(`Status: ${result.text}\nEmail sent to Ahsan`);
            window.location.reload();
        }, (error) => {
            alert(error.text);
        });
    }
    
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                <form ref={form} onSubmit={handleContactSubmit} id="contact-form" className="contact__form text-black">
                    <label htmlFor="user_name" className="font-bold text-lg text-main">Name</label>
                    <input type="text" placeholder="Name" className="contact__input" name="user_name" required />
                    <label htmlFor="user_email" className="font-bold text-lg text-main">Email</label>
                    <input type="email" placeholder="Email" className="contact__input" name="user_email" required />
                    <label htmlFor="message" className="font-bold text-lg text-main">Message</label>
                    <textarea name="message" placeholder="Message" id="" cols="0" rows="10" className="contact__input" required ></textarea>
                    <input type="submit" value="Send" className="contact__button button" />
                </form>
            </div>
        </section>
    )
}