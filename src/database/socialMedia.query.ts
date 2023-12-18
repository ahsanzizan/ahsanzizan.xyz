import SocialMediaModel from "@/models/SocialMedia.model";
import { connectAndQuery } from "../utils/connectAndQuery";
import { SocialMedia } from "@/types/models";

export async function getAllSocialMedias(): Promise<SocialMedia[]> {
  return connectAndQuery(async () => await SocialMediaModel.find({}));
}

export async function getSocialMediaById(
  id: string,
): Promise<SocialMedia | null> {
  return connectAndQuery(async () => {
    try {
      return await SocialMediaModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

type SocialMediaUpdateInput = {
  name?: string;
  url?: string;
  svgPath?: string;
};

export async function updateSocialMediaById(
  id: string,
  socialMedia: SocialMediaUpdateInput,
) {
  return connectAndQuery(
    async () => await SocialMediaModel.findByIdAndUpdate(id, socialMedia),
  );
}

export async function deleteSocialMediaById(id: string) {
  return connectAndQuery(
    async () => await SocialMediaModel.deleteOne({ _id: id }),
  );
}

type UpsertSocialMediaInput = {
  name?: string;
  url?: string;
  svgPath?: string;
};

export async function upsertSocialMedia(
  id: string,
  socialMedia: UpsertSocialMediaInput,
) {
  return connectAndQuery(
    async () =>
      await SocialMediaModel.findByIdAndUpdate(
        id,
        { ...socialMedia },
        { upsert: true },
      ),
  );
}
