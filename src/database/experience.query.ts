import ExperienceModel from "@/models/Experience.model";
import { connectAndQuery } from "../utils/utilities";
import { Experience } from "@/types/models";

export async function getAllExperiences(): Promise<Experience[]> {
  return connectAndQuery(async () => await ExperienceModel.find());
}

export async function getExperienceById(id: string): Promise<Experience> {
  return connectAndQuery(async () => {
    try {
      return await ExperienceModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function deleteExperienceById(id: string) {
  return connectAndQuery(async () => {
    try {
      await ExperienceModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
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
  return connectAndQuery(async () => {
    try {
      await ExperienceModel.findByIdAndUpdate(
        id,
        { ...experience },
        { upsert: true },
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
