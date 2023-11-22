import Header from "./components/Header";
import HomeWrapper from "./components/HomeWrapper";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-10 py-[137px]">
        <Header />
        <Services />
        <Works />
      </main>
    </HomeWrapper>
  );
}
