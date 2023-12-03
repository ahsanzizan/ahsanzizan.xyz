import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true, unique: true },
});

type _id = {
  _id: Types.ObjectId;
};
export type Project = InferSchemaType<typeof ProjectSchema> & _id;

export default models.Project<Project> ||
  model<Project>("Project", ProjectSchema);
