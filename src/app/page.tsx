import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Landing />
        <About />
        <Works />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
