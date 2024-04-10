import { Button, Link } from "../components/global/ui/Button";

export default function TesUI() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-11">
      <Link href="#" variant={"default"}>
        Link
      </Link>
      <Button variant={"inverse"}>Button</Button>
    </div>
  );
}
