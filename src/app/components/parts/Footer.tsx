import { getContentbyKey } from "@/database";
import { H3 } from "../global/ui/text";
import Spotify from "./spotify-figure";

export default async function Footer() {
  const email = await getContentbyKey("email");

  return (
    <footer className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <H3>{email?.content}</H3>
      <Spotify />
    </footer>
  );
}
