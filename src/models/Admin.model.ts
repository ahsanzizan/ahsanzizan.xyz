import { Schema, model, models, Document } from "mongoose"

export interface IAdmin extends Document {
    username: string;
    password?: string;
}

const AdminSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

export default models.Admin<IAdmin> || model<IAdmin>('Admin', AdminSchema)