import SocialMediaModel, { SocialMedia } from "@/models/SocialMedia.model";
import connectDB from "../mongoose";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllSocialMedias(): Promise<SocialMedia[]> {
  return connectAndQuery(async () => await SocialMediaModel.find({}));
}
