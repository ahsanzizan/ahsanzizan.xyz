import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NextAuthProvider } from "./components/NextAuthProvider";
import TopLoader from "./components/TopLoader";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Personal Website - Ahsan Azizan",
    template: "%s - Ahsan Azizan",
  },
  description: "Personal website of Ahsan Awadullah Azizan",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-mode="dark">
      <body
        className={raleway.className + " overflow-x-hidden bg-black text-white"}
      >
        <NextAuthProvider>
          <TopLoader />
          <Toaster position="top-right" />
          {children}
        </NextAuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
