import { Schema, model, models, InferSchemaType } from "mongoose";

const AdminSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export type Admin = InferSchemaType<typeof AdminSchema>;

export default models.Admin<Admin> || model<Admin>("Admin", AdminSchema);
