import { Metadata } from "next";
import { ReactNode } from "react";
import Wrapper from "../components/global/Wrapper";
import NavigationBar from "../components/global/ui/navigation-bar";
import cn from "@/lib/clsx";
import { SocialProfileJsonLd } from "next-seo";
import Footer from "../components/parts/Footer";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Wrapper>
      <NavigationBar />
      <SocialProfileJsonLd
        type="Person"
        name="Ahsan Awadullah Azizan"
        url="https://www.ahsanzizan.xyz"
        sameAs={[
          "https://instagram.com/ahsanzizan",
          "https://linkedin.com/in/ahsan-azizan",
          "https://youtube.com/@ahsanzizan",
        ]}
        useAppDir
      />
      <main className={cn("mx-auto w-full max-w-[1440px] px-5 py-24 md:px-20")}>
        {children}
      </main>
      <Footer />
    </Wrapper>
  );
}
