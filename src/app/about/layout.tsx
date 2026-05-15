import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Gnosify | Our Story, Mission & AI-Powered Vision",
  description:
    "Learn about Gnosify — who we are, our mission to help businesses grow through scalable digital solutions, our core values, and the team behind India's AI-first digital agency.",
  alternates: { canonical: "https://gnosify.in/about" },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
