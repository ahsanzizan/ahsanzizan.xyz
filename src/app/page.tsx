import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Navbar from "./components/Parts/Navbar";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <Header />
        <Services />
        <Works />
        <Footer />
      </main>
    </Wrapper>
  );
}
