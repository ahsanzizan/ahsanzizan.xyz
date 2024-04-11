import { Button, Link } from "../components/global/ui/button";
import NavigationBar from "../components/global/ui/navigation-bar";

export default function TesUI() {
  return (
    <>
      <NavigationBar />
      <div className="flex h-screen w-full items-center justify-center gap-11">
        <Link href="#" variant={"default"}>
          Link
        </Link>
        <Button variant={"inverse"}>Button</Button>
      </div>
      <div className="flex h-screen w-full items-center justify-center gap-11">
        <Link href="#" variant={"default"}>
          Link
        </Link>
        <Button variant={"inverse"}>Button</Button>
      </div>
    </>
  );
}
