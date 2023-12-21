import ProjectModel from "@/models/Project.model";
import { connectAndQuery } from "../utils/utilityFunctions";
import { Project } from "@/types/models";

export async function getAllProjects(): Promise<Project[]> {
  return connectAndQuery(async () => (await ProjectModel.find({})).reverse());
}

export async function getProjectById(id: string): Promise<Project> {
  return connectAndQuery(async () => {
    try {
      return await ProjectModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function getProjectByLink(link: string): Promise<Project> {
  return connectAndQuery(async () => await ProjectModel.findOne({ link }));
}

export async function deleteProjectById(id: string) {
  return connectAndQuery(async () => await ProjectModel.deleteOne({ _id: id }));
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
