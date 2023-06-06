"use client"
import "@styles/globals.css"
import Footer from "@components/Footer";
import NextNProgress from "nextjs-progressbar"

const RootLayout = ({ children }) => ((
    <html lang='en'>
        <head>
            <title>ahsanzizan</title>
            <meta name="description" content="Ahsan's Personal Website" /> 
        </head>
        <body>
            <NextNProgress options={{ easing: "ease", speed: 550 }} color='#00ADB5' />
            {children}
            <Footer />
        </body>
    </html>
));

export default RootLayout;