import { getContentbyKey } from "@/database/content.query";
import { SocialProfileJsonLd } from "next-seo";
import Blogs from "./components/Parts/Blogs";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Navbar from "./components/Parts/Navbar";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";
import Wrapper from "./components/global/Wrapper";

export default async function Home() {
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

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
      <Navbar email={email.content ?? "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] p-20">
        <Header />
        <Services />
        <Works />
        <Blogs />
        <Footer />
      </main>
    </Wrapper>
  );
}
