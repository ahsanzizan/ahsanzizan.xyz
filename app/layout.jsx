"use client"
import "@styles/globals.css"
import NextNProgress from "nextjs-progressbar";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bebas-neue',
});


const RootLayout = ({ children }) => (
    (
        <html lang='en' className="scroll-smooth selection:bg-gray-500 selection:text-white">
            <head>
                <title>ahsanzizan</title>
                <meta name="description" content="Ahsan's Personal Website" /> 
                <link href="https://fonts.cdnfonts.com/css/sequel" rel="stylesheet" />
            </head>
            <body className={`${bebasNeue.variable}`}>
                <NextNProgress options={{ easing: "ease", speed: 550 }} color='#00ADB5' />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
));

export default RootLayout;