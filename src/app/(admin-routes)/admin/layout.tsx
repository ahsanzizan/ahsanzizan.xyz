import NavigationBar from "@/app/components/global/ui/navigation-bar";
import Wrapper from "@/app/components/global/wrapper";
import Footer from "@/app/components/parts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

const links = [
  { href: "/admin", text: "Home" },
  { href: "/admin/experiences", text: "Exp" },
  { href: "/admin/works", text: "Work" },
  { href: "/admin/blogs", text: "Blog" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper>
      <NavigationBar links={links} />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-24">
        {children} <Footer />
      </main>
    </Wrapper>
  );
}

export const revalidate = 0;
