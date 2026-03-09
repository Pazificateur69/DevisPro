interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevisPro",
    url: "https://devispro.fr",
    description:
      "Mise en relation gratuite avec des artisans qualifies. Recevez jusqu'a 3 devis en moins de 24h.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33800000000",
      contactType: "customer service",
      availableLanguage: "French",
    },
  };
}

export function getServiceJsonLd(
  serviceName: string,
  serviceDescription: string,
  cityName?: string,
  priceRange?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cityName
      ? `${serviceName} a ${cityName}`
      : serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "DevisPro",
      url: "https://devispro.fr",
    },
    ...(cityName && {
      areaServed: {
        "@type": "City",
        name: cityName,
      },
    }),
    ...(priceRange && {
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: priceRange.split(" - ")[0]?.replace(/[^\d]/g, ""),
        highPrice: priceRange.split(" - ")[1]?.replace(/[^\d]/g, ""),
      },
    }),
  };
}

export function getFAQJsonLd(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
