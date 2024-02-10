import { Blog } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  link: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
});

export default models.Blog<Blog> ?? model<Blog>("Blog", BlogSchema);
