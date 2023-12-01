import { InferSchemaType, Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  title: { type: String, reuired: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: true },
});

export type Experience = InferSchemaType<typeof ExperienceSchema>;

export default models.Experience<Experience> ||
  model<Experience>("Experience", ExperienceSchema);
