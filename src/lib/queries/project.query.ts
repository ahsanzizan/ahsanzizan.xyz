import ProjectModel, { Project } from "@/models/Project.model";
import connectDB from "../mongoose";

export async function getAllProjects(): Promise<Project[]> {
  await connectDB();
  const projects = await ProjectModel.find({});
  return projects;
}

export async function getProjectByLink(link: string): Promise<Project[]> {
  await connectDB();
  const projects = await ProjectModel.findOne({ link });
  return projects;
}
