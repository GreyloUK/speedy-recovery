import { business } from "../data/business";
import { seo } from "../data/seo";
import { locations } from "../data/locations";
import { reviewsSummary } from "../data/reviews";
import type { Service } from "../data/services";
import type { Location } from "../data/locations";
import type { Faq } from "../data/faqs";

type JsonLd = Record<string, unknown>;

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${seo.siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: seo.siteUrl,
    telephone: business.phone.e164,
    image: new URL(seo.defaultOgImage, seo.siteUrl).toString(),
    priceRange: "££",
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.primaryAddress.street,
      addressLocality: business.primaryAddress.locality,
      addressRegion: business.primaryAddress.region,
      postalCode: business.primaryAddress.postcode,
      addressCountry: business.primaryAddress.country,
    },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: l.name,
    })),
    aggregateRating: reviewsSummary.isPlaceholder
      ? undefined
      : {
          "@type": "AggregateRating",
          ratingValue: reviewsSummary.averageRating,
          reviewCount: reviewsSummary.totalReviews,
        },
  };
}

export function serviceSchema(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.schema.serviceType,
    name: service.name,
    description: service.schema.description,
    provider: { "@id": `${seo.siteUrl}/#business` },
    areaServed: locations.map((l) => ({ "@type": "City", name: l.name })),
    url: `${seo.siteUrl}/services/${service.slug}/`,
  };
}

export function locationLocalBusinessSchema(location: Location): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: `${business.name} — ${location.name}`,
    url: `${seo.siteUrl}/areas/${location.slug}/`,
    telephone: business.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street,
      addressLocality: location.address.locality,
      addressRegion: location.address.region,
      postalCode: location.address.postcode,
      addressCountry: location.address.country,
    },
    areaServed: { "@type": "City", name: location.name },
    openingHours: "Mo-Su 00:00-23:59",
  };
}

export function faqSchema(items: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { label: string; path?: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.path ? new URL(c.path, seo.siteUrl).toString() : undefined,
    })),
  };
}
