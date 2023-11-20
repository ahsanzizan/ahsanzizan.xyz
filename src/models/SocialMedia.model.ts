import { InferSchemaType, Schema, model, models } from "mongoose";

const SocialMediaSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  svgPath: { type: String, required: true },
});

export type SocialMedia = InferSchemaType<typeof SocialMediaSchema>;

export default models["Social-Media"]<SocialMedia> ||
  model<SocialMedia>("Social-Media", SocialMediaSchema);
