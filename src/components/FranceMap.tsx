"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface CityDot {
  name: string;
  slug: string;
  x: number;
  y: number;
  size: "lg" | "md" | "sm";
}

const mainCities: CityDot[] = [
  { name: "Paris", slug: "paris", x: 48.5, y: 18.5, size: "lg" },
  { name: "Lyon", slug: "lyon", x: 55, y: 58, size: "lg" },
  { name: "Marseille", slug: "marseille", x: 57, y: 80, size: "lg" },
  { name: "Toulouse", slug: "toulouse", x: 32, y: 76, size: "lg" },
  { name: "Bordeaux", slug: "bordeaux", x: 22, y: 62, size: "lg" },
  { name: "Lille", slug: "lille", x: 50, y: 5, size: "md" },
  { name: "Nantes", slug: "nantes", x: 16, y: 38, size: "md" },
  { name: "Strasbourg", slug: "strasbourg", x: 77, y: 24, size: "md" },
  { name: "Nice", slug: "nice", x: 72, y: 78, size: "md" },
  { name: "Montpellier", slug: "montpellier", x: 47, y: 78, size: "md" },
  { name: "Rennes", slug: "rennes", x: 15, y: 28, size: "md" },
  { name: "Grenoble", slug: "grenoble", x: 62, y: 62, size: "sm" },
  { name: "Rouen", slug: "rouen", x: 38, y: 15, size: "sm" },
  { name: "Dijon", slug: "dijon", x: 60, y: 40, size: "sm" },
  { name: "Tours", slug: "tours", x: 33, y: 38, size: "sm" },
  { name: "Clermont-Ferrand", slug: "clermont-ferrand", x: 45, y: 56, size: "sm" },
  { name: "Metz", slug: "metz", x: 70, y: 18, size: "sm" },
  { name: "Perpignan", slug: "perpignan", x: 40, y: 86, size: "sm" },
  { name: "Toulon", slug: "toulon", x: 62, y: 83, size: "sm" },
  { name: "Angers", slug: "angers", x: 22, y: 36, size: "sm" },
  { name: "Brest", slug: "brest", x: 3, y: 24, size: "sm" },
  { name: "Reims", slug: "reims", x: 56, y: 16, size: "sm" },
  { name: "Orléans", slug: "orleans", x: 40, y: 32, size: "sm" },
  { name: "Pau", slug: "pau", x: 22, y: 80, size: "sm" },
];

export default function FranceMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const dotSize = (size: "lg" | "md" | "sm") => {
    switch (size) {
      case "lg": return { r: 6, pulse: 12 };
      case "md": return { r: 4.5, pulse: 9 };
      case "sm": return { r: 3, pulse: 7 };
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/3.5]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* France outline simplified */}
        <path
          d="M50 2 L58 4 L65 3 L72 8 L78 12 L80 18 L78 24 L76 28 L80 34 L78 40 L74 46 L72 52 L74 58 L72 64 L75 70 L72 76 L68 80 L64 84 L58 82 L54 86 L48 84 L42 88 L38 86 L34 82 L28 78 L22 80 L18 76 L16 70 L14 64 L12 58 L10 52 L8 46 L6 40 L4 34 L6 28 L4 24 L2 20 L6 16 L10 14 L14 18 L12 24 L14 28 L18 30 L16 36 L18 40 L22 38 L26 34 L30 30 L28 24 L32 18 L36 14 L40 10 L44 6 L48 4 Z"
          fill="url(#franceGradient)"
          stroke="#93c5fd"
          strokeWidth="0.5"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* City dots */}
        {mainCities.map((city) => {
          const size = dotSize(city.size);
          const isHovered = hoveredCity === city.slug;
          return (
            <Link
              key={city.slug}
              href={`/services/plomberie-urgente/${city.slug}`}
            >
              <g
                onMouseEnter={() => setHoveredCity(city.slug)}
                onMouseLeave={() => setHoveredCity(null)}
                className="cursor-pointer"
              >
                {/* Pulse ring */}
                {(isHovered || city.size === "lg") && (
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={size.pulse}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="0.3"
                    opacity={isHovered ? 0.6 : 0.3}
                    className={isHovered ? "" : "animate-ping"}
                    style={{ transformOrigin: `${city.x}px ${city.y}px`, animationDuration: "3s" }}
                  />
                )}
                {/* Main dot */}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={isHovered ? size.r * 1.4 : size.r}
                  fill={isHovered ? "#1d4ed8" : "#2563eb"}
                  filter={isHovered ? "url(#glow)" : undefined}
                  className="transition-all duration-200"
                />
                {/* White center */}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={isHovered ? size.r * 0.5 : size.r * 0.35}
                  fill="white"
                  className="transition-all duration-200"
                />
                {/* Label */}
                {(isHovered || city.size === "lg") && (
                  <text
                    x={city.x}
                    y={city.y - size.r - 2.5}
                    textAnchor="middle"
                    fill={isHovered ? "#1e40af" : "#374151"}
                    fontSize={isHovered ? "3.5" : "2.8"}
                    fontWeight={isHovered ? "700" : "600"}
                    className="transition-all duration-200 pointer-events-none"
                  >
                    {city.name}
                  </text>
                )}
              </g>
            </Link>
          );
        })}
      </svg>

      {/* Tooltip for hovered city */}
      {hoveredCity && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-4 py-2.5 border border-blue-100 flex items-center gap-2 animate-fade-in pointer-events-none z-10">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-gray-900 text-sm">
            {mainCities.find((c) => c.slug === hoveredCity)?.name}
          </span>
          <span className="text-xs text-blue-600 font-medium">Voir les artisans →</span>
        </div>
      )}
    </div>
  );
}
