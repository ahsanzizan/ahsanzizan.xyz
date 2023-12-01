import Navbar from "../components/Parts/Navbar";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Parts/Footer";
import Header from "./components/Header";
import Experiences from "./components/Experiences";

export default function About() {
  return (
    <Wrapper>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <Header />
        <Experiences />
        <Footer />
      </main>
    </Wrapper>
  );
}
