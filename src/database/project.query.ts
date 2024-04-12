import ProjectModel from "@/models/Project.model";
import { connectAndQuery } from "../utils/utilities";
import { Project } from "@/types/models";

export async function getAllProjects(): Promise<Project[]> {
  return connectAndQuery(async () => (await ProjectModel.find()).reverse());
}

export async function getProjectById(id: string): Promise<Project | null> {
  return connectAndQuery(async () => {
    try {
      return await ProjectModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function getProjectByLink(link: string): Promise<Project | null> {
  return connectAndQuery(async () => {
    try {
      return await ProjectModel.findOne({ link });
    } catch (error) {
      return null;
    }
  });
}

export async function deleteProjectById(id: string) {
  return connectAndQuery(async () => {
    try {
      await ProjectModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}

type UpsertProjectInput = {
  title?: string;
  url?: string;
  image?: string;
  link?: string;
  description?: string;
};

export async function upsertProject(id: string, project: UpsertProjectInput) {
  return connectAndQuery(async () => {
    try {
      await ProjectModel.findByIdAndUpdate(
        id,
        { ...project },
        { upsert: true },
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
