import { Experience } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const ExperienceSchema = new Schema({
  title: { type: String, reuired: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: true },
});

export default models.Experience<Experience> ||
  model<Experience>("Experience", ExperienceSchema);
