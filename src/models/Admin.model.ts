import { Admin } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const AdminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default models.Admin<Admin> || model<Admin>("Admin", AdminSchema);
