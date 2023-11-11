import { InferSchemaType, Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  link: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
});

export type Blog = InferSchemaType<typeof BlogSchema>;

export default models.Blog<Blog> || model<Blog>("Blog", BlogSchema);
