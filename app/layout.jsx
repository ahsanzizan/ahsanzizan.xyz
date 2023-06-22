import "@styles/globals.css"
import { Bebas_Neue } from "next/font/google";
import Footer from "@components/Footer";
import NProgress from "@components/NProgress";

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bebas-neue',
});

export const metadata = {
    title: 'ahsanzizan - Ahsan Awadullah Azizan',
    description: "Ahsan's Personal Website"
}

const RootLayout = ({ children }) => (
    (
        <html lang='en' className="scroll-smooth selection:bg-gray-500 selection:text-white">
            <head> 
                <link rel="icon" sizes="any" href="/favicon.ico" />
                <link href="https://fonts.cdnfonts.com/css/sequel" rel="stylesheet" />
            </head>
            <body className={`${bebasNeue.variable}`}>
                <NProgress />
                {children}
                <Footer />
            </body>
        </html>
));

export default RootLayout;