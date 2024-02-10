import { Content } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const ContentSchema = new Schema({
  key: { type: String, required: true },
  content: { type: Schema.Types.Mixed, required: true },
});

export default models.Content<Content> ??
  model<Content>("Content", ContentSchema);
