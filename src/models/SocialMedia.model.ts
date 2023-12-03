import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const SocialMediaSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  svgPath: { type: String, required: true },
});

type _id = {
  _id: Types.ObjectId;
};
export type SocialMedia = InferSchemaType<typeof SocialMediaSchema> & _id;

export default models["Social-Media"]<SocialMedia> ||
  model<SocialMedia>("Social-Media", SocialMediaSchema);
