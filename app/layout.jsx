"use client"
import "@styles/globals.css"
import NextNProgress from "nextjs-progressbar";
import { Anton } from "next/font/google";

const anton = new Anton();

const RootLayout = ({ children }) => ((
    <html lang='en' className="scroll-smooth">
        <head>
            <title>ahsanzizan</title>
            <meta name="description" content="Ahsan's Personal Website" /> 
            <link href="https://fonts.cdnfonts.com/css/sequel" rel="stylesheet" />
        </head>
        <body className={anton.className}>
            <NextNProgress options={{ easing: "ease", speed: 550 }} color='#00ADB5' />
            {children}
            {/* <Footer /> */}
        </body>
    </html>
));

export default RootLayout;