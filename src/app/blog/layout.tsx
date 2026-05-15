import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | AI, Tech & Business Insights | Gnosify",
  description:
    "Read the Gnosify blog for expert insights on AI, web development, SEO, digital marketing, and how Indian SMBs can leverage technology to grow their business.",
  alternates: { canonical: "https://gnosify.in/blog" },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
