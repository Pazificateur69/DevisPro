"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  City Data                                                         */
/* ------------------------------------------------------------------ */

interface CityDot {
  name: string;
  slug: string;
  coordinates: [number, number]; // [longitude, latitude]
  size: "lg" | "md" | "sm";
  labelAnchor?: "start" | "middle" | "end";
  labelDx?: number;
  labelDy?: number;
}

const cities: CityDot[] = [
  { name: "Paris", slug: "paris", coordinates: [2.3522, 48.8566], size: "lg", labelDy: -12 },
  { name: "Lyon", slug: "lyon", coordinates: [4.8357, 45.764], size: "lg", labelDx: 14, labelDy: 2, labelAnchor: "start" },
  { name: "Marseille", slug: "marseille", coordinates: [5.3698, 43.2965], size: "lg", labelDx: 12, labelDy: 2, labelAnchor: "start" },
  { name: "Toulouse", slug: "toulouse", coordinates: [1.4442, 43.6047], size: "lg", labelDx: -12, labelDy: 2, labelAnchor: "end" },
  { name: "Bordeaux", slug: "bordeaux", coordinates: [-0.5792, 44.8378], size: "lg", labelDx: -12, labelDy: 2, labelAnchor: "end" },
  { name: "Lille", slug: "lille", coordinates: [3.0573, 50.6292], size: "md", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Nantes", slug: "nantes", coordinates: [-1.5536, 47.2184], size: "md", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Strasbourg", slug: "strasbourg", coordinates: [7.7521, 48.5734], size: "md", labelDx: -12, labelDy: -8, labelAnchor: "end" },
  { name: "Nice", slug: "nice", coordinates: [7.262, 43.7102], size: "md", labelDx: 10, labelDy: -4, labelAnchor: "start" },
  { name: "Montpellier", slug: "montpellier", coordinates: [3.8767, 43.6108], size: "md", labelDy: 16, labelAnchor: "middle" },
  { name: "Rennes", slug: "rennes", coordinates: [-1.6778, 48.1173], size: "md", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Grenoble", slug: "grenoble", coordinates: [5.7245, 45.1885], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Rouen", slug: "rouen", coordinates: [1.0999, 49.4432], size: "sm", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Dijon", slug: "dijon", coordinates: [5.0415, 47.322], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Tours", slug: "tours", coordinates: [0.6848, 47.3941], size: "sm", labelDy: -10 },
  { name: "Clermont-Ferrand", slug: "clermont-ferrand", coordinates: [3.087, 45.7772], size: "sm", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Metz", slug: "metz", coordinates: [6.1757, 49.1193], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Reims", slug: "reims", coordinates: [4.0317, 49.2583], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Toulon", slug: "toulon", coordinates: [5.9305, 43.1242], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Angers", slug: "angers", coordinates: [-0.5516, 47.4784], size: "sm", labelDy: -10 },
  { name: "Brest", slug: "brest", coordinates: [-4.486, 48.3904], size: "sm", labelDy: -10 },
  { name: "Orléans", slug: "orleans", coordinates: [1.9093, 47.903], size: "sm", labelDx: 10, labelDy: 2, labelAnchor: "start" },
  { name: "Perpignan", slug: "perpignan", coordinates: [2.8959, 42.6986], size: "sm", labelDx: -10, labelDy: 2, labelAnchor: "end" },
  { name: "Pau", slug: "pau", coordinates: [-0.3707, 43.2951], size: "sm", labelDx: -10, labelDy: 2, labelAnchor: "end" },
];

const GEO_URL = "/fr-departments.json";

export default function FranceMap() {
  const [hoveredDept, setHoveredDept] = useState<{ id: string; name: string } | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  }, []);

  if (!isMounted) return <div className="h-[520px] w-full max-w-lg mx-auto bg-slate-50 rounded-2xl animate-pulse" />;

  const dotRadius = (size: "lg" | "md" | "sm") => {
    switch (size) {
      case "lg": return 4.5;
      case "md": return 3.5;
      case "sm": return 2.5;
    }
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="glass shadow-2xl shadow-indigo-500/10 rounded-3xl p-4 overflow-hidden relative">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-3.0, -46.5, 0],
            scale: 3000,
          }}
          className="w-full h-auto"
          style={{ outline: "none" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setHoveredDept({ id: geo.properties.code, name: geo.properties.nom });
                  }}
                  onMouseLeave={() => {
                    setHoveredDept(null);
                  }}
                  className={`map-polygon ${hoveredDept?.id === geo.properties.code ? 'active' : ''}`}
                />
              ))
            }
          </Geographies>

          {cities.map((city) => {
            const isHovered = hoveredCity === city.slug;
            const anchor = city.labelAnchor || "middle";
            const r = dotRadius(city.size);

            return (
              <Marker
                key={city.slug}
                coordinates={city.coordinates as [number, number]}
                onMouseEnter={() => setHoveredCity(city.slug)}
                onMouseLeave={() => setHoveredCity(null)}
                className="map-city-dot"
              >
                <Link href={`/services/plomberie-urgente/${city.slug}`}>
                  <g>
                    {/* Hover Pulse Ring */}
                    {isHovered && (
                      <circle
                        r={r + 6}
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="1.5"
                        opacity="0.6"
                        className="animate-pulse"
                      />
                    )}

                    {/* Main Dot */}
                    <circle
                      r={isHovered ? r * 1.3 : r}
                      fill={isHovered ? "#6366f1" : "#17171d"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      style={{ transition: "all 0.2s ease", filter: isHovered ? "drop-shadow(0 0 6px rgba(99,102,241,0.8))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                    />

                    {/* City Label */}
                    {(isHovered || city.size === "lg") && (
                      <text
                        textAnchor={anchor}
                        y={city.labelDy || -12}
                        x={city.labelDx || 0}
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: isHovered ? '12px' : '10px',
                          fontWeight: isHovered ? '700' : '600',
                          fill: isHovered ? '#4f46e5' : '#111827',
                          transition: "all 0.2s ease",
                          pointerEvents: "none",
                          textShadow: "0px 1px 4px white, 0px -1px 4px white, 1px 0px 4px white, -1px 0px 4px white" // Simulate stroke for readability
                        }}
                      >
                        {city.name}
                      </text>
                    )}
                  </g>
                </Link>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {hoveredDept && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 bg-white/95 backdrop-blur-lg text-slate-900 rounded-lg text-sm font-bold shadow-xl border border-slate-200/50 flex align-center gap-2"
          style={{
            top: tooltipPos.y - 40,
            left: tooltipPos.x,
            transform: "translateX(-50%)",
            animation: "fade-in 0.15s ease-out"
          }}
        >
          <span className="text-indigo-600">{hoveredDept.id}</span>
          <span>{hoveredDept.name}</span>
        </div>
      )}

      {hoveredCity && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-dark bg-gray-900/95 text-white shadow-2xl shadow-indigo-500/20 rounded-2xl px-5 py-3 flex items-center gap-3 pointer-events-none z-10 animate-fade-in-up">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-sm">
            {cities.find((c) => c.slug === hoveredCity)?.name}
          </span>
          <span className="text-xs text-indigo-300 font-medium whitespace-nowrap bg-indigo-500/20 px-2 py-0.5 rounded-full">
            Voir les artisans &rarr;
          </span>
        </div>
      )}
    </div>
  );
}
