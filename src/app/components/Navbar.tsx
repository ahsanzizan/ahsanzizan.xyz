import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="fixed left-0 top-0 w-full">
        <nav className="flex items-center justify-between py-5 max-w-4xl mx-auto">
          <a href="/">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="Logo"
              className="opacity-100 hover:opacity-60 transition-all duration-300"
            />
          </a>

          <ul className="flex gap-12">
            <li>
              <a href="#" className="nav-item">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-item">About</a>
            </li>
            <li>
              <a href="#works" className="nav-item">Works</a>
            </li>
            <li>
              <a href="mailto:ahsanaz461@gmail.com" className="btn-primary">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
