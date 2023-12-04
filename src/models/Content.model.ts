import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const ContentSchema = new Schema({
  key: { type: String, required: true },
  content: { type: Schema.Types.Mixed, required: true },
});

type _id = {
  _id: Types.ObjectId;
};
export type Content = InferSchemaType<typeof ContentSchema> & _id;

export default models.Content<Content> ||
  model<Content>("Content", ContentSchema);
