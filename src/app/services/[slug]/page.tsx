import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllSlugs } from '@/lib/services-data';
import ServicePageClient from './ServicePageClient';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `https://gnosify.in/services/${slug}`;
  return {
    title: `${service.title} Services | Gnosify`,
    description: `${service.tagline} — Delivered by Gnosify, India's AI-first digital solutions company.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} Services | Gnosify`,
      description: service.tagline,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${service.title} Services | Gnosify`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.tagline,
    provider: {
      "@type": "Organization",
      name: "Gnosify",
      url: "https://gnosify.in",
    },
    url: `https://gnosify.in/services/${slug}`,
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageClient service={service} />
    </>
  );
}
