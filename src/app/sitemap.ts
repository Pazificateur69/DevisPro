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

const URLS_PER_SITEMAP = 10000;

// Generate sitemap index with multiple sitemaps to stay under memory limits
// Sitemap 0: static + services + regions + departments + cities + content pages
// Sitemap 1..N: service×city pages in chunks of 10,000
export async function generateSitemaps() {
  const totalServiceCityPages = services.length * cities.length;
  const serviceChunks = Math.ceil(totalServiceCityPages / URLS_PER_SITEMAP);
  // id 0 = all non-service×city pages, id 1+ = service×city chunks
  const sitemaps = [{ id: 0 }];
  for (let i = 1; i <= serviceChunks; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default function sitemap({
  id,
}: {
  id: number;
}): MetadataRoute.Sitemap {
  const now = new Date();

  // Sitemap 0: all non-service×city pages (~1,600 URLs)
  if (id === 0) {
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

    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

    const regionPages: MetadataRoute.Sitemap = getAllRegions().map((region) => ({
      url: `${BASE_URL}/regions/${region.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    const departmentPages: MetadataRoute.Sitemap = getDepartments().map(
      (dept) => ({
        url: `${BASE_URL}/departements/${dept.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    );

    const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
      url: `${BASE_URL}/villes/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    const guidePages: MetadataRoute.Sitemap = longTailPages.map((page) => ({
      url: `${BASE_URL}/guide/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    const prixPages: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${BASE_URL}/prix/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    const glossairePages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
      url: `${BASE_URL}/glossaire/${term.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

    const comparatifPages: MetadataRoute.Sitemap = comparatifs.map((comp) => ({
      url: `${BASE_URL}/comparatif/${comp.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

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
      ...blogPages,
      ...guidePages,
      ...prixPages,
      ...glossairePages,
      ...comparatifPages,
      ...urgencePages,
    ];
  }

  // Sitemaps 1..N: service×city pages in chunks of URLS_PER_SITEMAP
  const chunkIndex = id - 1;
  const start = chunkIndex * URLS_PER_SITEMAP;

  // Build flat list of all service×city combos and take the right chunk
  const allCombos: MetadataRoute.Sitemap = [];
  let idx = 0;
  const end = start + URLS_PER_SITEMAP;

  for (const service of services) {
    for (const city of cities) {
      if (idx >= start && idx < end) {
        allCombos.push({
          url: `${BASE_URL}/services/${service.slug}/${city.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
      idx++;
      if (idx >= end) break;
    }
    if (idx >= end) break;
  }

  return allCombos;
}
