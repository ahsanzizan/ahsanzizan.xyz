import { Types, InferSchemaType } from "mongoose";
import {
  AdminSchema,
  BlogSchema,
  CertificateSchema,
  ContentSchema,
  ExperienceSchema,
  ProjectSchema,
  SocialMediaSchema,
} from "@/models";

// There's no '_id' attribute in the default
// InferSchemaType from mongoose, therefore we need to
// manually create an '_id' type and assign it to the schema type
type ObjectId = Types.ObjectId;
type WithId<T> = T & { _id: ObjectId };

export type Admin = WithId<InferSchemaType<typeof AdminSchema>>;
export type Blog = WithId<InferSchemaType<typeof BlogSchema>>;
export type Certificate = WithId<InferSchemaType<typeof CertificateSchema>>;
export type Content = WithId<InferSchemaType<typeof ContentSchema>>;
export type Experience = WithId<InferSchemaType<typeof ExperienceSchema>>;
export type Project = WithId<InferSchemaType<typeof ProjectSchema>>;
export type SocialMedia = WithId<InferSchemaType<typeof SocialMediaSchema>>;
