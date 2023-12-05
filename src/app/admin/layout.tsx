import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Wrapper from "../components/Wrapper";

export const metadata: Metadata = {
  title: "Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[200px]">
        {children}
      </main>
    </>
  );
}
