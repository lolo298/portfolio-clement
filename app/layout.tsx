import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio clement",
  description: "Portfolio clement",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-bg text-base text-primary`}>
        <Providers>
          <Header />
          <main className="relative flex flex-col items-center *:my-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
