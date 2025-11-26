import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/style/font";
import Navbar from "@/components/header/navbar";
import SiteFooter from "@/components/footer/SiteFooter";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "SMK 3 Dolopoh",
  description: "SMK 3 Dolopoh",
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
        <Toaster position="top-center" richColors />
        <SiteFooter/>
        </body>
    </html>
  );
}
