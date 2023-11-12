import { Schema, model, models, InferSchemaType, ObjectId } from "mongoose";

const AdminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

type _id = {
  _id: ObjectId;
};
export type Admin = InferSchemaType<typeof AdminSchema> & _id;

export default models.Admin<Admin> || model<Admin>("Admin", AdminSchema);
