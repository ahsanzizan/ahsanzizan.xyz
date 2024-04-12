import ContentModel from "@/models/Content.model";
import { connectAndQuery } from "../utils/utilities";
import { Content } from "@/types/models";

export async function getAllContents(): Promise<Content[]> {
  return connectAndQuery(async () => await ContentModel.find());
}

export async function getContentById(id: string): Promise<Content | null> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await ContentModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function getContentbyKey(key: string): Promise<Content | null> {
  return connectAndQuery(async () => {
    try {
      return await ContentModel.findOne({ key });
    } catch (error) {
      return null;
    }
  });
}

export async function deleteContentById(id: string) {
  return connectAndQuery(async () => {
    try {
      await ContentModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}

type UpsertContentInput = {
  key?: string;
  content?: string;
};

export async function upsertContent(id: string, content: UpsertContentInput) {
  return connectAndQuery(async () => {
    try {
      await ContentModel.findByIdAndUpdate(
        id,
        { ...content },
        { upsert: true },
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
