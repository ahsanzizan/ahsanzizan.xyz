import { Certificate } from "crypto";
import { Schema, model, models } from "mongoose";

export const CertificateSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
});

export default models.Certificate<Certificate> ||
  model<Certificate>("Certificate", CertificateSchema);
