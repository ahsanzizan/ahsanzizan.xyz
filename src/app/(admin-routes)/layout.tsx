import type { Metadata } from "next";
import { NextAuthProvider } from "../components/NextAuthProvider";

export const metadata: Metadata = {
  title: "Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
