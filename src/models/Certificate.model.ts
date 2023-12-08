import { InferSchemaType, Schema, Types, model, models } from "mongoose";

const CertificateSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

type _id = {
  _id: Types.ObjectId;
};
export type Certificate = InferSchemaType<typeof CertificateSchema> & _id;

export default models.Certificate<Certificate> ||
  model<Certificate>("Blog", CertificateSchema);
