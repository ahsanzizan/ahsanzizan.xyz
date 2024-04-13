"use client";
import cn from "@/lib/clsx";
import { truncateString } from "@/utils/utilities";
import { useEffect, useState } from "react";
import SpotifyIcon from "../global/icons/Spotify";
import { Anchor } from "../global/ui/anchor";
import { H3, P } from "../global/ui/text";
import { Link } from "../global/ui/button";

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

  // Fetch the '/api/now-playing' every 3 seconds
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
    <figure
      className={cn(
        "flex w-full min-w-[75%] max-w-[75%] md:min-w-[30%] md:max-w-[30%]",
      )}
    >
      <Link
        href={"#"}
        variant={"inverse"}
        className={cn("flex w-full items-center gap-8")}
      >
        <SpotifyIcon
          className={`h-10 w-10 transition-all duration-300 group-hover:text-black ${
            data?.isPlaying ? "animate-pulse" : ""
          }`}
        />
        <div className="block">
          <H3 className="mb-1 transition-all duration-300 group-hover:text-black">
            {data?.isPlaying ? truncateString(data.title, 20) : "Not playing"}
          </H3>
          <P>{data?.isPlaying ? `by ${data.artist}` : "None"}</P>
        </div>
      </Link>
    </figure>
  );
}
