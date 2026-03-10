import { cities, type City } from "./cities";

export interface Department {
  slug: string;
  name: string;
  code: string;
  region: string;
}

export function getDepartments(): Department[] {
  const deptMap = new Map<string, Department>();
  for (const city of cities) {
    const slug = city.department
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    if (!deptMap.has(slug)) {
      deptMap.set(slug, {
        slug,
        name: city.department,
        code: city.departmentCode,
        region: city.region,
      });
    }
  }
  return Array.from(deptMap.values()).sort((a, b) =>
    a.code.localeCompare(b.code)
  );
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  return getDepartments().find((d) => d.slug === slug);
}

export function getCitiesByDepartment(deptSlug: string): City[] {
  const dept = getDepartmentBySlug(deptSlug);
  if (!dept) return [];
  return cities
    .filter((c) => c.departmentCode === dept.code)
    .sort((a, b) => b.population - a.population);
}
