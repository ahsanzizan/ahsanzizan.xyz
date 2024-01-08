import { Certificate } from "@/types/models";
import { connectAndQuery } from "../utils/utilityFunctions";
import CertificateModel from "@/models/Certificate.model";

export async function getAllCertificates(): Promise<Certificate[]> {
  return connectAndQuery(async () => await CertificateModel.find());
}

export async function getCertificateByLink(
  link: string,
): Promise<Certificate | null> {
  return connectAndQuery(async () => {
    try {
      return await CertificateModel.findOne({ link });
    } catch (error) {
      return null;
    }
  });
}

export async function getCertificateById(
  id: string,
): Promise<Certificate | null> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await CertificateModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function deleteCertificateById(id: string) {
  return connectAndQuery(async () => {
    try {
      await CertificateModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}

type UpsertCertificateInput = {
  title?: string;
  url?: string;
  description?: string;
  image?: string;
};

export async function upsertCertificate(
  id: string,
  certificate: UpsertCertificateInput,
) {
  return connectAndQuery(async () => {
    try {
      await CertificateModel.findByIdAndUpdate(
        id,
        { ...certificate },
        { upsert: true },
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
