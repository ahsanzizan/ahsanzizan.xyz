import SocialMediaModel, { SocialMedia } from "@/models/SocialMedia.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllSocialMedias(): Promise<SocialMedia[]> {
  return connectAndQuery(async () => await SocialMediaModel.find({}));
}

export async function deleteSocialMediaById(id: string) {
  return connectAndQuery(
    async () => await SocialMediaModel.deleteOne({ _id: id }),
  );
}

export async function createSocialMedia(socialMedia: SocialMedia) {
  return connectAndQuery(
    async () => await SocialMediaModel.create({ ...socialMedia }),
  );
}
