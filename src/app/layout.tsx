import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./text-animations.css";
import GlobalClickEffect from "@/components/GlobalClickEffect";
import TextAnimationObserver from "@/components/TextAnimationObserver";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gnosify.in"),
  title: {
    default: "Gnosify | AI-First Digital Solutions for Growing Businesses",
    template: "%s | Gnosify",
  },
  description:
    "Gnosify is an AI-first digital solutions company building innovative, scalable, and high-performance websites, apps, and AI automation for businesses worldwide.",
  keywords: [
    "AI solutions India",
    "web development India",
    "digital marketing",
    "SEO services",
    "mobile app development",
    "AI automation",
    "Gnosify",
  ],
  authors: [{ name: "Gnosify", url: "https://gnosify.in" }],
  creator: "Gnosify",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gnosify.in",
    siteName: "Gnosify",
    title: "Gnosify | AI-First Digital Solutions for Growing Businesses",
    description:
      "Scalable websites, AI automation, mobile apps, SEO & more — built by Gnosify for businesses that want to grow faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gnosify — AI-First Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gnosify",
    creator: "@gnosify",
    title: "Gnosify | AI-First Digital Solutions for Growing Businesses",
    description:
      "Scalable websites, AI automation, mobile apps, SEO & more — built by Gnosify for businesses that want to grow faster.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gnosify",
  url: "https://gnosify.in",
  logo: "https://gnosify.in/logo.png",
  description:
    "Gnosify is an AI-first digital solutions company building innovative, scalable, and high-performance websites, apps, and AI automation for businesses worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6003633316",
    contactType: "customer service",
    email: "contact@gnosify.in",
    areaServed: "IN",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/gnosify",
    "https://twitter.com/gnosify",
    "https://instagram.com/gnosify",
    "https://facebook.com/gnosify",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GlobalClickEffect />
        <TextAnimationObserver />
        <WhatsAppWidget />
        {children}
      </body>
    </html>
  );
}
