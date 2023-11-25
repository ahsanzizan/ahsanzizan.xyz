import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import HomeWrapper from "./components/HomeWrapper";
import Navbar from "./components/Parts/Navbar";
import Services from "./components/Parts/Services";
import Works from "./components/Parts/Works";

export default function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-10 py-[137px]">
        <Header />
        <Services />
        <Works />
        <Footer />
      </main>
    </HomeWrapper>
  );
}
