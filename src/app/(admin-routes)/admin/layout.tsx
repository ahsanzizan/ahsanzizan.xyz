import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto w-full max-w-[1440px] px-5 py-24">
        {children}
      </main>
    </>
  );
}

export const revalidate = 0;
