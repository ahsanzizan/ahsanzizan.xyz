import { InternalServerError, Success } from "@/utils/apiResponses";
import { getNowPlaying } from "@/utils/spotify";

export async function GET() {
  try {
    const res = await getNowPlaying();

    if (
      res.status === 204 ||
      res.status > 400 ||
      res.data.currently_playing_type !== "track"
    )
      return Success({ message: "Not playing anything", isPlaying: false });

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

    return Success({
      message: "Successfully retrieved now-playing from spotify",
      data,
    });
  } catch (error) {
    return InternalServerError();
  }
}

export const revalidate = 0;
