import ExperienceModel, { Experience } from "@/models/Experience.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllExperiences(): Promise<Experience[]> {
  return connectAndQuery(async () => await ExperienceModel.find({}));
}

export async function getExperienceById(id: string): Promise<Experience> {
  return connectAndQuery(async () => await ExperienceModel.findById(id));
}

type UpsertExperienceInput = {
  startDate: Date;
  description: string;
  title?: string;
  endDate?: Date;
};

export async function upsertExperience(
  id: string,
  experience: UpsertExperienceInput,
) {
  return connectAndQuery(
    async () =>
      await ExperienceModel.findByIdAndUpdate(
        id,
        { ...experience },
        { upsert: true },
      ),
  );
}

export async function deleteExperienceById(id: string) {
  return connectAndQuery(
    async () => await ExperienceModel.findByIdAndDelete(id),
  );
}
