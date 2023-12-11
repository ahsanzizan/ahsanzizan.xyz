import { getNowPlaying } from "@/utils/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await getNowPlaying();

    if (
      res.status === 204 ||
      res.status > 400 ||
      res.data.currently_playing_type !== "track"
    ) {
      return NextResponse.json(
        { message: "Not playing anything", status: 200, isPlaying: false },
        { status: 200 },
      );
    }

    const data = {
      isPlaying: res.data.is_playing,
      title: res.data.item.name,
      album: res.data.item.album.name,
      artist: res.data.item.album.artists
        .map((artist: { name: string }) => artist.name)
        .join(", "),
      albumImageUrl: res.data.item.album.images[0].url,
      songUrl: res.data.item.external_urls.spotify,
    };

    return NextResponse.json(
      { status: 200, message: "success", data },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: "internal server error" },
      { status: 500 },
    );
  }
}

export const revalidate = 0;
