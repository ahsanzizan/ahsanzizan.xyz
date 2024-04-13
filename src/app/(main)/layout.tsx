import { Metadata } from "next";
import { ReactNode } from "react";
import Wrapper from "../components/global/Wrapper";
import { SocialProfileJsonLd } from "next-seo";
import NavigationBar from "../components/global/ui/navigation-bar";
import cn from "@/lib/clsx";
import Footer from "../components/parts/Footer";

export const metadata: Metadata = {
  robots: { follow: true, index: true },
};

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Wrapper>
      <SocialProfileJsonLd
        type="Person"
        name="Ahsan Awadullah Azizan"
        url="https://www.ahsanzizan.xyz"
        sameAs={[
          "https://instagram.com/ahsanzizan",
          "https://linkedin.com/in/ahsan-azizan",
          "https://youtube.com/@jetto_curvarine",
        ]}
        useAppDir
      />
      <NavigationBar />

      <main className={cn("mx-auto w-full max-w-[1440px] px-5 py-20")}>
        {children}
        <Footer />
      </main>
    </Wrapper>
  );
}
