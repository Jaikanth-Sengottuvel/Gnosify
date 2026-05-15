import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Gnosify | Get a Free Consultation Today",
  description:
    "Ready to build something great? Contact Gnosify for a free consultation on web development, AI automation, SEO, or any digital solution. We respond within 24 hours.",
  alternates: { canonical: "https://gnosify.in/contact" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
