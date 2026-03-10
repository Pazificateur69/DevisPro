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
    name: "Renov Habitation",
    url: "https://renov-habitation.fr",
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
      name: "Renov Habitation",
      url: "https://renov-habitation.fr",
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

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Renov Habitation",
    url: "https://renov-habitation.fr",
    description: "Mise en relation gratuite avec des artisans qualifies pour tous vos travaux.",
    telephone: "+33800000000",
    email: "contact@renov-habitation.fr",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}
