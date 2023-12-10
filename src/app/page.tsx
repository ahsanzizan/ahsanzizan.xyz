import { SocialProfileJsonLd } from "next-seo";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Navbar from "./components/Parts/Navbar";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";
import { getContentbyKey } from "@/lib/queries/content.query";
import Blogs from "./components/Parts/Blogs";
import Spotify from "./components/Parts/Spotify";

export default async function Home() {
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <>
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
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <Header />
        <Services />
        <Works />
        <Blogs />
        <Spotify />
        <Footer />
      </main>
    </>
  );
}

export const revalidate = 0;
