import { Document, Schema, model, models } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  createdAt: Date;
  link: string;
  author: string;
  tags: string[];
}

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  link: { type: String, required: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
});

export default models.Blog<IBlog> || model<IBlog>("Blog", BlogSchema);
