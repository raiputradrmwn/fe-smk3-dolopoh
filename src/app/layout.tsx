import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/style/font";
import Navbar from "@/components/header/navbar";
import SiteFooter from "@/components/footer/SiteFooter";
export const metadata: Metadata = {
  title: "SMK 3 DOLOPOH",
  description: "SMK 3 DOLOPOH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar/>
        {children}
        <SiteFooter/>
        </body>
    </html>
  );
}
