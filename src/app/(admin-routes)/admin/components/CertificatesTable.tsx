"use client";
import { deleteCertificateAction } from "@/actions/deleteActions";
import { Button, Link } from "@/app/components/global/ui/button";
import { H3 } from "@/app/components/global/ui/text";
import { Certificate } from "@/types/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CertificatesTable({
  certificates,
}: Readonly<{
  certificates: Certificate[];
}>) {
  const router = useRouter();
  const simplifiedCertificates: Certificate[] = JSON.parse(
    JSON.stringify(certificates),
  );

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <H3>Certificates</H3>
        <Link href={"/admin/certificates/new"} variant={"default"}>
          New
        </Link>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedCertificates.map((certificate) => (
          <div
            key={certificate._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {certificate.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteCertificateAction(certificate._id.toString()).then(
                    () => {
                      toast.success("Successfully deleted a certificate", {
                        id: toastId,
                      });
                      router.refresh();
                    },
                  );
                }}
                variant={"default"}
              >
                Delete
              </Button>
              <Link
                href={"/admin/certificates/" + certificate._id.toString()}
                variant={"inverse"}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
