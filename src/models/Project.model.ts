import { InferSchemaType, Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

export type Project = InferSchemaType<typeof ProjectSchema>;

export default models.Project<Project> ||
  model<Project>("Project", ProjectSchema);
