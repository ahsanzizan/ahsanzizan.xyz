import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  link: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
});

type _id = {
  _id: Types.ObjectId;
};
export type Blog = InferSchemaType<typeof BlogSchema> & _id;

export default models.Blog<Blog> || model<Blog>("Blog", BlogSchema);
