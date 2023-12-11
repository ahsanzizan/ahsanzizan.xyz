import Navbar from "../components/Parts/Navbar";
import Footer from "../components/Parts/Footer";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { getContentbyKey } from "@/database/content.query";

export default async function About() {
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <Header />
        <Experiences />
        <Footer />
      </main>
    </>
  );
}

export const revalidate = 0;
