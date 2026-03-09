"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Region {
  id: string;
  name: string;
  fill: string;
  hoverFill: string;
  d: string; // SVG path data
}

interface CityDot {
  name: string;
  slug: string;
  cx: number;
  cy: number;
  size: "lg" | "md" | "sm";
  labelAnchor?: "start" | "middle" | "end";
  labelDx?: number;
  labelDy?: number;
}

/* ------------------------------------------------------------------ */
/*  Regions  (simplified but recognisable outlines)                    */
/*  ViewBox = 0 0 500 520                                             */
/*  Coordinates are approximate but follow real geography              */
/* ------------------------------------------------------------------ */

const regions: Region[] = [
  {
    id: "hauts-de-france",
    name: "Hauts-de-France",
    fill: "#93b8e8",
    hoverFill: "#6a9ee0",
    d: "M245,10 L270,8 L295,15 L320,10 L340,25 L355,50 L350,70 L340,80 L320,90 L300,95 L280,100 L265,105 L248,102 L235,95 L225,85 L215,75 L210,60 L215,45 L220,30 L230,18 Z",
  },
  {
    id: "normandie",
    name: "Normandie",
    fill: "#a8c5eb",
    hoverFill: "#7daee3",
    d: "M120,65 L140,55 L160,50 L180,52 L200,55 L215,60 L215,75 L225,85 L235,95 L248,102 L245,110 L235,118 L220,120 L200,115 L180,112 L160,108 L145,100 L130,95 L118,88 L110,80 L115,72 Z",
  },
  {
    id: "bretagne",
    name: "Bretagne",
    fill: "#7fb0e0",
    hoverFill: "#5a96d6",
    d: "M20,110 L40,95 L60,88 L80,82 L100,78 L115,72 L118,88 L130,95 L145,100 L160,108 L155,120 L145,132 L130,140 L115,148 L100,152 L80,150 L60,145 L40,140 L25,132 L18,122 Z",
  },
  {
    id: "grand-est",
    name: "Grand Est",
    fill: "#8ab6e2",
    hoverFill: "#6199d8",
    d: "M340,25 L360,30 L380,40 L398,55 L410,75 L415,95 L410,115 L400,135 L385,150 L370,160 L355,165 L340,162 L325,155 L310,148 L300,140 L295,130 L300,115 L300,95 L320,90 L340,80 L350,70 L355,50 Z",
  },
  {
    id: "ile-de-france",
    name: "Île-de-France",
    fill: "#6a9ee0",
    hoverFill: "#4080d4",
    d: "M248,102 L265,105 L280,100 L295,105 L300,115 L295,130 L285,138 L270,142 L255,140 L242,135 L235,125 L235,118 L245,110 Z",
  },
  {
    id: "pays-de-la-loire",
    name: "Pays de la Loire",
    fill: "#9dc0e8",
    hoverFill: "#72a6de",
    d: "M80,150 L100,152 L115,148 L130,140 L145,132 L155,120 L160,108 L180,112 L200,115 L220,120 L225,130 L220,142 L212,155 L200,165 L185,172 L168,178 L150,180 L130,178 L110,175 L95,170 L80,165 Z",
  },
  {
    id: "centre-val-de-loire",
    name: "Centre-Val de Loire",
    fill: "#a0c3ea",
    hoverFill: "#78ade2",
    d: "M220,120 L235,118 L235,125 L242,135 L255,140 L270,142 L285,138 L295,130 L310,148 L305,162 L295,178 L285,190 L270,198 L258,200 L245,195 L232,188 L220,180 L210,170 L205,158 L212,155 L220,142 L225,130 Z",
  },
  {
    id: "bourgogne-franche-comte",
    name: "Bourgogne-Franche-Comté",
    fill: "#8db8e4",
    hoverFill: "#669ed8",
    d: "M295,130 L300,140 L310,148 L325,155 L340,162 L355,165 L370,160 L378,170 L375,185 L368,200 L358,215 L345,225 L330,230 L315,228 L300,222 L290,212 L285,200 L285,190 L295,178 L305,162 Z",
  },
  {
    id: "auvergne-rhone-alpes",
    name: "Auvergne-Rhône-Alpes",
    fill: "#7aade0",
    hoverFill: "#5592d4",
    d: "M258,200 L270,198 L285,200 L290,212 L300,222 L315,228 L330,230 L345,225 L358,215 L368,200 L375,185 L385,192 L398,205 L408,220 L410,240 L405,260 L395,275 L380,285 L365,290 L348,292 L330,290 L315,285 L300,280 L288,272 L278,260 L268,248 L260,235 L255,220 L255,210 Z",
  },
  {
    id: "nouvelle-aquitaine",
    name: "Nouvelle-Aquitaine",
    fill: "#95bce6",
    hoverFill: "#6da2dc",
    d: "M80,165 L95,170 L110,175 L130,178 L150,180 L168,178 L185,172 L200,165 L210,170 L220,180 L232,188 L245,195 L258,200 L255,210 L255,220 L260,235 L255,250 L248,265 L240,278 L230,290 L218,300 L205,310 L192,318 L178,322 L165,318 L152,310 L140,300 L128,290 L118,280 L108,268 L98,255 L90,240 L85,225 L80,210 L78,195 L78,180 Z",
  },
  {
    id: "occitanie",
    name: "Occitanie",
    fill: "#88b4e2",
    hoverFill: "#6098d6",
    d: "M178,322 L192,318 L205,310 L218,300 L230,290 L240,278 L248,265 L255,250 L260,235 L268,248 L278,260 L288,272 L300,280 L315,285 L330,290 L335,305 L330,320 L320,335 L310,348 L295,360 L280,368 L262,372 L245,370 L228,365 L215,358 L200,350 L188,342 L178,335 Z",
  },
  {
    id: "paca",
    name: "Provence-Alpes-Côte d'Azur",
    fill: "#7daee0",
    hoverFill: "#5894d4",
    d: "M300,280 L315,285 L330,290 L348,292 L365,290 L380,285 L395,275 L405,260 L418,270 L430,285 L438,302 L435,320 L425,335 L412,345 L395,350 L378,348 L360,342 L345,335 L335,325 L330,320 L335,305 Z",
  },
  {
    id: "corse",
    name: "Corse",
    fill: "#a5c4ea",
    hoverFill: "#7eade2",
    d: "M455,340 L462,335 L470,340 L475,355 L478,375 L476,395 L472,412 L465,425 L458,430 L452,425 L448,410 L445,395 L444,378 L446,360 L450,348 Z",
  },
];

/* ------------------------------------------------------------------ */
/*  City positions mapped to the 500 x 520 viewBox                     */
/* ------------------------------------------------------------------ */

const cities: CityDot[] = [
  { name: "Paris", slug: "paris", cx: 264, cy: 118, size: "lg", labelDy: -10 },
  { name: "Lyon", slug: "lyon", cx: 328, cy: 252, size: "lg", labelDx: 12, labelDy: 2, labelAnchor: "start" },
  { name: "Marseille", slug: "marseille", cx: 370, cy: 325, size: "lg", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Toulouse", slug: "toulouse", cx: 230, cy: 330, size: "lg", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Bordeaux", slug: "bordeaux", cx: 138, cy: 268, size: "lg", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Lille", slug: "lille", cx: 290, cy: 38, size: "md", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Nantes", slug: "nantes", cx: 120, cy: 160, size: "md", labelDx: -8, labelDy: 2, labelAnchor: "end" },
  { name: "Strasbourg", slug: "strasbourg", cx: 400, cy: 100, size: "md", labelDx: -10, labelDy: -6, labelAnchor: "end" },
  { name: "Nice", slug: "nice", cx: 418, cy: 298, size: "md", labelDx: 8, labelDy: -4, labelAnchor: "start" },
  { name: "Montpellier", slug: "montpellier", cx: 302, cy: 328, size: "md", labelDy: 14, labelAnchor: "middle" },
  { name: "Rennes", slug: "rennes", cx: 108, cy: 118, size: "md", labelDx: -8, labelDy: 2, labelAnchor: "end" },
  { name: "Grenoble", slug: "grenoble", cx: 358, cy: 262, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Rouen", slug: "rouen", cx: 218, cy: 82, size: "sm", labelDx: -8, labelDy: 2, labelAnchor: "end" },
  { name: "Dijon", slug: "dijon", cx: 328, cy: 185, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Tours", slug: "tours", cx: 212, cy: 162, size: "sm", labelDy: -8 },
  { name: "Clermont-Ferrand", slug: "clermont-ferrand", cx: 275, cy: 242, size: "sm", labelDx: -8, labelDy: 2, labelAnchor: "end" },
  { name: "Metz", slug: "metz", cx: 370, cy: 85, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Reims", slug: "reims", cx: 310, cy: 72, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Toulon", slug: "toulon", cx: 388, cy: 340, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Angers", slug: "angers", cx: 148, cy: 158, size: "sm", labelDy: -8 },
  { name: "Brest", slug: "brest", cx: 38, cy: 102, size: "sm", labelDy: -8 },
  { name: "Orléans", slug: "orleans", cx: 242, cy: 148, size: "sm", labelDx: 8, labelDy: 2, labelAnchor: "start" },
  { name: "Perpignan", slug: "perpignan", cx: 265, cy: 362, size: "sm", labelDx: -8, labelDy: 2, labelAnchor: "end" },
  { name: "Pau", slug: "pau", cx: 168, cy: 325, size: "sm", labelDx: -8, labelDy: 2, labelAnchor: "end" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FranceMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);

  const handleRegionEnter = useCallback((region: Region, e: React.MouseEvent<SVGPathElement>) => {
    setHoveredRegion(region.id);
    const svg = (e.target as SVGPathElement).closest("svg");
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    setTooltip({ x: svgP.x, y: svgP.y - 14, label: region.name });
  }, []);

  const handleRegionMove = useCallback((e: React.MouseEvent<SVGPathElement>) => {
    const svg = (e.target as SVGPathElement).closest("svg");
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    setTooltip((prev) => prev ? { ...prev, x: svgP.x, y: svgP.y - 14 } : null);
  }, []);

  const handleRegionLeave = useCallback(() => {
    setHoveredRegion(null);
    setTooltip(null);
  }, []);

  const dotRadius = (size: "lg" | "md" | "sm") => {
    switch (size) {
      case "lg": return 6;
      case "md": return 4.5;
      case "sm": return 3.2;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 500 520"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 4px 24px rgba(37,99,235,0.08))" }}
      >
        <defs>
          {/* Subtle shadow for the whole map */}
          <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#1e40af" floodOpacity="0.10" />
          </filter>

          {/* Glow effect for hovered city dots */}
          <filter id="cityGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for the sea / background */}
          <radialGradient id="seaGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#f0f7ff" />
            <stop offset="100%" stopColor="#e8f2ff" />
          </radialGradient>

          {/* Tooltip background filter */}
          <filter id="tooltipShadow" x="-20%" y="-30%" width="140%" height="160%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="500" height="520" fill="url(#seaGrad)" rx="12" />

        {/* Region paths */}
        <g filter="url(#mapShadow)">
          {regions.map((region) => {
            const isHovered = hoveredRegion === region.id;
            return (
              <path
                key={region.id}
                d={region.d}
                fill={isHovered ? region.hoverFill : region.fill}
                stroke="#ffffff"
                strokeWidth={isHovered ? "2.5" : "1.5"}
                strokeLinejoin="round"
                onMouseEnter={(e) => handleRegionEnter(region, e)}
                onMouseMove={handleRegionMove}
                onMouseLeave={handleRegionLeave}
                className="cursor-pointer"
                style={{
                  transition: "fill 0.25s ease, stroke-width 0.2s ease, transform 0.2s ease",
                  transformOrigin: "center",
                  transform: isHovered ? "scale(1.012)" : "scale(1)",
                }}
              />
            );
          })}
        </g>

        {/* City dots & labels */}
        {cities.map((city) => {
          const r = dotRadius(city.size);
          const isHovered = hoveredCity === city.slug;
          const anchor = city.labelAnchor || "middle";
          const dx = city.labelDx || 0;
          const dy = city.labelDy || -10;

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
                {/* Hover ring */}
                {isHovered && (
                  <circle
                    cx={city.cx}
                    cy={city.cy}
                    r={r + 6}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    opacity="0.4"
                    style={{ animation: "mapPulse 1.6s ease-in-out infinite" }}
                  />
                )}

                {/* Outer ring for large cities */}
                {city.size === "lg" && !isHovered && (
                  <circle
                    cx={city.cx}
                    cy={city.cy}
                    r={r + 4}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="0.6"
                    opacity="0.25"
                  />
                )}

                {/* Main dot */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={isHovered ? r * 1.35 : r}
                  fill={isHovered ? "#1d4ed8" : "#2563eb"}
                  stroke="#ffffff"
                  strokeWidth={city.size === "lg" ? "2" : "1.4"}
                  filter={isHovered ? "url(#cityGlow)" : undefined}
                  style={{ transition: "r 0.2s ease, fill 0.2s ease" }}
                />

                {/* White center highlight */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={isHovered ? r * 0.45 : r * 0.32}
                  fill="#ffffff"
                  opacity="0.9"
                  style={{ transition: "r 0.2s ease" }}
                />

                {/* City label - always visible for large, on hover for others */}
                {(isHovered || city.size === "lg") && (
                  <g>
                    {/* Label background for readability */}
                    <text
                      x={city.cx + dx}
                      y={city.cy + dy}
                      textAnchor={anchor}
                      dominantBaseline="central"
                      fill="#ffffff"
                      fontSize={isHovered ? "12" : "10.5"}
                      fontWeight="700"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                      className="pointer-events-none select-none"
                    >
                      {city.name}
                    </text>
                    {/* Label foreground */}
                    <text
                      x={city.cx + dx}
                      y={city.cy + dy}
                      textAnchor={anchor}
                      dominantBaseline="central"
                      fill={isHovered ? "#1e3a8a" : "#1e40af"}
                      fontSize={isHovered ? "12" : "10.5"}
                      fontWeight="700"
                      className="pointer-events-none select-none"
                    >
                      {city.name}
                    </text>
                  </g>
                )}
              </g>
            </Link>
          );
        })}

        {/* Region tooltip following cursor */}
        {tooltip && (
          <g filter="url(#tooltipShadow)" className="pointer-events-none">
            <rect
              x={tooltip.x - 60}
              y={tooltip.y - 14}
              width="120"
              height="24"
              rx="6"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="0.5"
            />
            <text
              x={tooltip.x}
              y={tooltip.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#1e3a8a"
              fontSize="9"
              fontWeight="600"
              className="select-none"
            >
              {tooltip.label}
            </text>
          </g>
        )}
      </svg>

      {/* Bottom bar tooltip for hovered city */}
      {hoveredCity && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-lg shadow-blue-500/10 rounded-xl px-5 py-3 border border-blue-100 flex items-center gap-2.5 pointer-events-none z-10"
          style={{ animation: "fadeSlideUp 0.2s ease-out" }}
        >
          <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span className="font-semibold text-gray-900 text-sm">
            {cities.find((c) => c.slug === hoveredCity)?.name}
          </span>
          <span className="text-xs text-blue-600 font-medium whitespace-nowrap">
            Voir les artisans &rarr;
          </span>
        </div>
      )}

      {/* Keyframe animations (injected via style tag) */}
      <style>{`
        @keyframes mapPulse {
          0%, 100% { opacity: 0.4; r: inherit; }
          50% { opacity: 0.15; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}
