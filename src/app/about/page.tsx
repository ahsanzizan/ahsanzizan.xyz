import Navbar from "../components/Parts/Navbar";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Parts/Footer";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import { getContentbyKey } from "@/lib/queries/content.query";

export default async function About() {
  const email = JSON.parse(JSON.stringify(await getContentbyKey("email")));

  return (
    <Wrapper>
      <Navbar email={email?.content} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <Header />
        <Experiences />
        <Footer />
      </main>
    </Wrapper>
  );
}
