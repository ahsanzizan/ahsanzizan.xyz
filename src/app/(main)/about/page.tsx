import Certificates from "./components/Certificates";
import Experiences from "./components/Experiences";
import Header from "./components/Header";

export default async function About() {
  return (
    <>
      <Header />
      <Experiences />
      <Certificates />
    </>
  );
}
