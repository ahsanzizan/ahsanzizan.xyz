import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getAllCertificates() {
  const certificates = await prisma.certificate.findMany();
  return certificates;
}

export async function getCertificateById(id: string) {
  const certificate = await prisma.certificate.findUnique({ where: { id } });
  return certificate;
}

export async function deleteCertificateById(id: string) {
  try {
    await prisma.certificate.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function upsertCertificate(
  id: string,
  data: Prisma.CertificateUncheckedCreateInput,
) {
  try {
    await prisma.certificate.upsert({
      where: { id },
      create: data,
      update: data,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
