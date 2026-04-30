import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./text-animations.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import GlobalClickEffect from "@/components/GlobalClickEffect";
import TextAnimationObserver from "@/components/TextAnimationObserver";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Gnosify | AI-First Digital Solutions",
  description: "Gnosify is an AI-first digital solutions company focused on building innovative, scalable, and high-performance technology products. Web development, mobile apps, AI automation, SEO & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <GlobalClickEffect />
        <TextAnimationObserver />
        <WhatsAppWidget />
        {children}
      </body>
    </html>
  );
}
