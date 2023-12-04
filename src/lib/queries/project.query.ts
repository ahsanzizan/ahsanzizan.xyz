import ProjectModel, { Project } from "@/models/Project.model";
import { connectAndQuery } from "../connectAndQuery";

export async function getAllProjects(): Promise<Project[]> {
  return connectAndQuery(async () => await ProjectModel.find({}));
}

export async function getProjectById(id: string): Promise<Project> {
  return connectAndQuery(async () => await ProjectModel.findById(id));
}

export async function getProjectByLink(link: string): Promise<Project> {
  return connectAndQuery(async () => await ProjectModel.findOne({ link }));
}

type UpsertProjectInput = {
  title?: string;
  url?: string;
  image?: string;
  link?: string;
  description?: string;
};

export async function upsertProject(id: string, project: UpsertProjectInput) {
  return connectAndQuery(
    async () =>
      await ProjectModel.findByIdAndUpdate(
        id,
        { ...project },
        { upsert: true },
      ),
  );
}
