import SocialMediaModel, { SocialMedia } from "@/models/SocialMedia.model";
import connectDB from "../mongoose";

export async function getAllSocialMedias(): Promise<SocialMedia[]> {
  await connectDB();
  const result = await SocialMediaModel.find({});
  return result;
}
