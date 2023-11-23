import ProjectModel, { Project } from "@/models/Project.model";
import connectDB from "../mongoose";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllProjects(): Promise<Project[]> {
  return connectAndQuery(async () => await ProjectModel.find({}));
}

export async function getProjectByLink(link: string): Promise<Project[]> {
  return connectAndQuery(async () => await ProjectModel.findOne({ link }));
}
