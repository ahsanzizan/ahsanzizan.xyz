import { SocialMedia } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const SocialMediaSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  svgPath: { type: String, required: true },
});

export default models["Social-Media"]<SocialMedia> ??
  model<SocialMedia>("Social-Media", SocialMediaSchema);
