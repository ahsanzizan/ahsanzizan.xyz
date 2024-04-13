import LeftArrowIcon from "./components/global/icons/LeftArrow";
import { Link } from "./components/global/ui/button";
import Wrapper from "./components/global/Wrapper";

export default function NotFound() {
  return (
    <Wrapper>
      <section className="flex min-h-screen w-screen items-center justify-center">
        <header className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className="text-center text-6xl leading-snug drop-shadow-glow md:text-9xl">
            404
          </h1>
          <h5 className="text-md mb-8 text-center md:text-xl">
            The page you are looking for is not available.
          </h5>
          <div className="block">
            <Link href="/">Back</Link>
          </div>
        </header>
      </section>
    </Wrapper>
  );
}
