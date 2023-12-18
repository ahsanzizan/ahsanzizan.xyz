import { AdminSchema } from "@/models/Admin.model";
import { BlogSchema } from "@/models/Blog.model";
import { CertificateSchema } from "@/models/Certificate.model";
import { ContentSchema } from "@/models/Content.model";
import { ExperienceSchema } from "@/models/Experience.model";
import { ProjectSchema } from "@/models/Project.model";
import { SocialMediaSchema } from "@/models/SocialMedia.model";
import { InferSchemaType, Types } from "mongoose";

type _id = {
  _id: Types.ObjectId;
};

export type Admin = InferSchemaType<typeof AdminSchema> & _id;
export type Blog = InferSchemaType<typeof BlogSchema> & _id;
export type Certificate = InferSchemaType<typeof CertificateSchema> & _id;
export type Content = InferSchemaType<typeof ContentSchema> & _id;
export type Experience = InferSchemaType<typeof ExperienceSchema> & _id;
export type Project = InferSchemaType<typeof ProjectSchema> & _id;
export type SocialMedia = InferSchemaType<typeof SocialMediaSchema> & _id;
