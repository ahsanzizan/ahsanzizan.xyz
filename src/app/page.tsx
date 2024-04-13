import { SocialProfileJsonLd } from "next-seo";
import Blogs from "./components/Parts/Blogs";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";
import Wrapper from "./components/global/Wrapper";
import NavigationBar from "./components/global/ui/navigation-bar";
import cn from "@/lib/clsx";
import Contact from "./components/Parts/Contact";

export default async function Home() {
  return (
    <Wrapper>
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
      <NavigationBar />
      <main className={cn("mx-auto w-full max-w-[1440px] px-5 py-24 md:px-20")}>
        <Header />
        <Services />
        <Works />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </Wrapper>
  );
}
