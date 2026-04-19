import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranoy Puli — Senior Supply Chain Analyst",
  description:
    "Portfolio of Pranoy Puli, Senior Supply Chain Analyst at Fender with 10+ years turning complex supply chain data into decisions that move the business.",
  openGraph: {
    title: "Pranoy Puli — Senior Supply Chain Analyst",
    description: "Ten years of supply chain. I turn complexity into clarity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${geist.variable} ${geistMono.variable}`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <GrainOverlay />
          <ScrollProgress />
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
