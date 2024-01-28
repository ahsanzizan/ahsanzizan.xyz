"use client";
import { useEffect, useState } from "react";
import SpotifyIcon from "../global/Icons/Spotify";

export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

function displayTitle(title: string) {
  const threshold = 25;
  if (title.length <= threshold) return title;

  return title.slice(0, threshold) + "...";
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
    <figure className="flex w-full min-w-[60%] max-w-[60%] md:min-w-[33.333%] md:max-w-[33.333%]">
      <div className="flex w-full items-center gap-8 rounded-lg border border-white p-5">
        <SpotifyIcon className="h-10 w-10" />
        <div className="block">
          <h1 className="mb-2 text-lg drop-shadow-glow md:text-2xl">
            {data?.isPlaying
              ? displayTitle(data.title)
              : "Not playing anything"}
          </h1>
          <p>{data?.isPlaying ? `by ${data.artist}` : "None"}</p>
        </div>
      </div>
    </figure>
  );
}
