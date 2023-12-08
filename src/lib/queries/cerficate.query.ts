import { connectAndQuery } from "../connectAndQuery";
import CertificateModel, { Certificate } from "@/models/Certificate.model";

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
