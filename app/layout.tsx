import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DMM Ivanovic - Izrada Nameštaja po Meri | Kuhinje, Plakar, Dnevni Boravak",
  description: "DMM Ivanovic - Preko 20 godina iskustva u izradi kuhinja, plakara, američkih plakara, dnevnog boravka i ostalog nameštaja po meri. Besplatna ponuda i izlazak na teren. Beograd, Srbija.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: ["kuhinje po meri", "plakar po meri", "američki plakari", "nameštaj po meri", "izrada kuhinja", "dnevni boravak", "tv komoda", "dečije sobe", "čipelarnik", "nameštaj Beograd", "stolari Beograd", "DMM Ivanovic"],
  alternates: {
    canonical: "https://www.dmmivanovic.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
