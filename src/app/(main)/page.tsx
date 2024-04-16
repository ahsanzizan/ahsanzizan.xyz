import Blogs from "../components/parts/Blogs";
import Contact from "../components/parts/Contact";
import Header from "../components/parts/Header";
import Services from "../components/parts/Services";
import Works from "../components/parts/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Works />
      <Blogs />
      <Contact />
    </>
  );
}
