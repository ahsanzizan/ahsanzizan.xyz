import ContentModel, { Content } from "@/models/Content.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllContents(): Promise<Content[]> {
  return connectAndQuery(async () => await ContentModel.find({}));
}

export async function getContentById(id: string): Promise<Content> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await ContentModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function deleteContentById(id: string) {
  return connectAndQuery(async () => await ContentModel.findByIdAndDelete(id));
}

type UpsertContentInput = {
  key?: string;
  content?: string;
};

export async function upsertContent(id: string, content: UpsertContentInput) {
  return connectAndQuery(
    async () =>
      await ContentModel.findByIdAndUpdate(
        id,
        { ...content },
        { upsert: true },
      ),
  );
}
