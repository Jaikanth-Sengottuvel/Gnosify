import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers at Gnosify | Join Our AI-First Team",
  description:
    "Join Gnosify's growing team of developers, designers, and AI engineers. We're hiring Full-Stack Engineers, AI/ML Engineers, UI/UX Designers and more. Apply today.",
  alternates: { canonical: "https://gnosify.in/careers" },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
