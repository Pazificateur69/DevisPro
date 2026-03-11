import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { longTailPages } from "@/lib/longtail";
import { blogPosts } from "@/lib/blog";
import { getAllRegions } from "@/lib/regions";
import { getDepartments } from "@/lib/departements";
import { glossaryTerms } from "@/lib/glossaire";
import { comparatifs } from "@/lib/comparatifs";
import { urgenceData } from "@/lib/urgence";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://renov-habitation.fr";

// Split sitemap into chunks for large sites (Google limit: 50,000 URLs per sitemap)
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/villes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/regions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/comment-ca-marche`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/comparateur`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/zones-intervention`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/plombier-urgence`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/reparation-volets`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/devis-renovation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/plan-du-site`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages (25)
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Region pages (17)
  const regionPages: MetadataRoute.Sitemap = getAllRegions().map((region) => ({
    url: `${BASE_URL}/regions/${region.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Department pages (~110)
  const departmentPages: MetadataRoute.Sitemap = getDepartments().map(
    (dept) => ({
      url: `${BASE_URL}/departements/${dept.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // City pages (~1245)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/villes/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // City + service pages (~31,125) - the main volume driver
  const cityServicePages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of cities) {
      cityServicePages.push({
        url: `${BASE_URL}/services/${service.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Long-tail guide pages
  const guidePages: MetadataRoute.Sitemap = longTailPages.map((page) => ({
    url: `${BASE_URL}/guide/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Prix pages (25)
  const prixPages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/prix/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Glossaire individual term pages
  const glossairePages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/glossaire/${term.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Comparatif pages
  const comparatifPages: MetadataRoute.Sitemap = comparatifs.map((comp) => ({
    url: `${BASE_URL}/comparatif/${comp.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Urgence pages
  const urgencePages: MetadataRoute.Sitemap = urgenceData.map((urg) => ({
    url: `${BASE_URL}/urgence/${urg.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...regionPages,
    ...departmentPages,
    ...cityPages,
    ...cityServicePages,
    ...blogPages,
    ...guidePages,
    ...prixPages,
    ...glossairePages,
    ...comparatifPages,
    ...urgencePages,
  ];
}
