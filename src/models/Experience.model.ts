import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  title: { type: String, reuired: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: true },
});

type _id = {
  _id: Types.ObjectId;
};
export type Experience = InferSchemaType<typeof ExperienceSchema> & _id;

export default models.Experience<Experience> ||
  model<Experience>("Experience", ExperienceSchema);
