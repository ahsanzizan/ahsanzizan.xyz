"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StandardLinkButton } from "../global/Buttons";
import LeftArrowIcon from "../global/Icons/LeftArrow";

export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function Spotify() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [refreshToken, setRefreshToken] = useState<number>(Math.random());

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/now-playing").then((x) => x.json());
      setData(res.data);
    }

    getData().finally(() => {
      setTimeout(() => setRefreshToken(Math.random()), 3000);
    });
  }, [refreshToken]);

  return (
    <section className="mb-32 w-full py-12" id="spotify">
      <figure className="w-full">
        <h4 className="mb-8 text-lg drop-shadow-glow md:text-2xl">
          Listening to...
        </h4>
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl border border-white md:flex-row md:items-center md:justify-normal lg:gap-12">
          <Image
            className={`absolute right-4 top-4 mb-4 ${
              data?.isPlaying ? "animate-spin" : "animate-none"
            }`}
            src={"/Disc.svg"}
            alt={data?.isPlaying ? data.album : "Not playing"}
            width={52}
            height={52}
            unoptimized
          />
          <div className="h-full w-full p-0 md:min-w-[50%] md:max-w-[50%]">
            <Image
              className="h-full w-full object-cover md:min-h-[699px]"
              src={
                data?.isPlaying
                  ? data.albumImageUrl
                  : "https://qph.cf2.quoracdn.net/main-qimg-e6ddb9058baa038619e08a8209d78e26-lq"
              }
              alt={data?.isPlaying ? data.album : "Not playing anything"}
              width={640}
              height={640}
              unoptimized
            />
          </div>
          <div className="block px-5 py-5 md:py-10 lg:pl-0 lg:pr-24">
            <h1 className="text-4xl drop-shadow-glow md:text-7xl">
              {data?.isPlaying ? data.title : "Not playing anything"}
            </h1>
            <p className="mb-7">
              {data?.isPlaying ? `By ${data.artist}` : "None"}
            </p>
            <StandardLinkButton href={data?.isPlaying ? data.songUrl : "#"}>
              Play Song{" "}
              <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
            </StandardLinkButton>
          </div>
        </div>
      </figure>
    </section>
  );
}
