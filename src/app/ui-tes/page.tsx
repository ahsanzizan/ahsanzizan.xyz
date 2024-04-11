import { Anchor } from "../components/global/ui/anchor";
import { Button, Link } from "../components/global/ui/button";
import { H1, H2, H3, H4, P } from "../components/global/ui/text";
import NavigationBar from "../components/global/ui/navigation-bar";

export default function TesUI() {
  return (
    <>
      <NavigationBar />
      <div className="flex h-screen w-full items-center justify-center gap-11">
        <H1>Ini Heading</H1>
        <H2>Ini Heading</H2>
        <Link href="#" variant={"default"}>
          Link
        </Link>
        <Button variant={"inverse"}>Button</Button>
      </div>
      <div className="flex h-screen w-full items-center justify-center gap-11">
        <H3>Ini Heading</H3>
        <Link href="#" variant={"default"}>
          Link
        </Link>
        <Button variant={"inverse"}>Button</Button>
        <Anchor href="#" variant={"default"}>
          ini anchor
        </Anchor>
      </div>
      <div className="flex h-screen w-full items-center justify-center gap-11">
        <H4>Ini Heading</H4>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,{" "}
          <Anchor href={"#"} variant={"default"}>
            Test
          </Anchor>{" "}
          Lorem ipsum dolor sit amet.
        </P>
      </div>
    </>
  );
}
