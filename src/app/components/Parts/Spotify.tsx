"use client";
import { useEffect, useState } from "react";
import SpotifyIcon from "../global/icons/Spotify";
import { truncateString } from "@/utils/utilityFunctions";

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
    <figure className="flex w-full min-w-[75%] max-w-[75%] md:min-w-[30%] md:max-w-[30%]">
      <div className="flex w-full items-center gap-8 rounded-lg border border-white px-5 py-3">
        <SpotifyIcon
          className={`h-10 w-10 ${data?.isPlaying ? "animate-pulse" : ""}`}
        />
        <div className="block">
          <h1 className="mb-2 text-lg drop-shadow-glow md:text-2xl">
            {data?.isPlaying
              ? truncateString(data.title, 20)
              : "Not playing anything"}
          </h1>
          <p className="text-neutral-400">
            {data?.isPlaying ? `by ${data.artist}` : "None"}
          </p>
        </div>
      </div>
    </figure>
  );
}
