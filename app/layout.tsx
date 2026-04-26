import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distributor Solar Industri | PT Anugerah Buana Sriwijaya",
  description:
    "Website company profile distributor solar industri untuk kebutuhan manufaktur, proyek, logistik, pertambangan, dan genset di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><ScrollToTop />{children}</body>
    </html>
  );
}
