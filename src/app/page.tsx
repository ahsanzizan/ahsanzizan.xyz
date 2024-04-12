import { SocialProfileJsonLd } from "next-seo";
import Blogs from "./components/Parts/Blogs";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";
import Wrapper from "./components/global/Wrapper";
import NavigationBar from "./components/global/ui/navigation-bar";

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
      <main className="mx-auto w-full max-w-[1440px] px-20 py-24">
        <Header />
        <Services />
        <Works />
        <Blogs />
        <Footer />
      </main>
    </Wrapper>
  );
}
