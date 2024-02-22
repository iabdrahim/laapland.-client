import type { Metadata } from "next";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import { Providers } from "../components/provider";
import { Toaster } from "react-hot-toast";
import { Nav } from "@/components/nav";
import Footer from "@/components/footer";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Best laptops store in the town",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let noNavOrFooter = ["/dashboard"];
  const fullUrl: string = headers().get("referer")?.toString() as string;
  let url = new URL("https://test.com");
  try {
    url = new URL(fullUrl);
  } catch {}

  return (
    <html className="light">
      <body>
        <Providers>
          {!noNavOrFooter.some((e) => url.pathname.startsWith(e)) && <Nav />}
          <main className="w-full max-w-7xl mx-auto max-md:px-3">
            {children}
          </main>
          {!noNavOrFooter.some((e) => url.pathname.startsWith(e)) && <Footer />}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
