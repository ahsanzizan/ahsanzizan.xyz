import { Certificate } from "@/types/models";
import { connectAndQuery } from "../utils/utilityFunctions";
import CertificateModel from "@/models/Certificate.model";

export async function getAllCertificates(): Promise<Certificate[]> {
  return connectAndQuery(async () => await CertificateModel.find({}));
}

export async function getCertificateByLink(link: string): Promise<Certificate> {
  return connectAndQuery(async () => await CertificateModel.findOne({ link }));
}

export async function getCertificateById(id: string): Promise<Certificate> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await CertificateModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

type UpsertCertificateInput = {
  title?: string;
  link?: string;
  description?: string;
};

export async function upsertCertificate(
  id: string,
  certificate: UpsertCertificateInput,
) {
  return connectAndQuery(
    async () =>
      await CertificateModel.findByIdAndUpdate(
        id,
        { ...certificate },
        { upsert: true },
      ),
  );
}
