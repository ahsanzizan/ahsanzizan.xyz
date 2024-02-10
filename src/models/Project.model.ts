import { Project } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  isWorkedOn: { type: Boolean },
});

export default models.Project<Project> ??
  model<Project>("Project", ProjectSchema);
