import "./globals.css";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";

const nanumGothicFont = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ahsan Azizan | Personal Website",
  description: "Personal website of Ahsan Awadullah Azizan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nanumGothicFont.className}>{children}</body>
    </html>
  );
}
