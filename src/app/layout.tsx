import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { NextAuthProvider } from "./components/NextAuthProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahsan Azizan | Personal Website",
    template: "Ahsan Azizan | %s",
  },
  description: "Personal website of Ahsan Awadullah Azizan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " overflow-x-hidden"}>
        <NextAuthProvider>
          <NextTopLoader color="#fff" />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
