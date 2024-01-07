import { Metadata } from "next";
import Navbar from "../components/Parts/Navbar";
import { getContentbyKey } from "@/database/content.query";
import { Content } from "@/types/models";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const email: Content = JSON.parse(
    JSON.stringify(await getContentbyKey("email")),
  );

  return (
    <>
      <Navbar email={email?.content || "ahsanaz461@gmail.com"} />
      {children}
    </>
  );
}

export const revalidate = 0;
