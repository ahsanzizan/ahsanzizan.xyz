import About from "./components/About";
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
      </main>
    </>
  );
}
