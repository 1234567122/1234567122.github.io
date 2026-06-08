import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPageSeo } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...getPageSeo("home"),
  metadataBase: new URL("https://www.ls56789.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
