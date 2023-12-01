import ExperienceModel, { Experience } from "@/models/Experience.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllExperiences(): Promise<Experience[]> {
  return connectAndQuery(async () => await ExperienceModel.find({}));
}
