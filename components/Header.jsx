"use client";

import { useEffect, useState } from "react";
import { SurfMark } from "./Blob";

const NAV = [
  { id: "techniek", label: "Techniek & Communicatie" },
  { id: "cms", label: "CMS'en & Online Kanalen" },
  { id: "communities", label: "Communities" },
  { id: "projecten", label: "Projecten & Stakeholders" },
  { id: "waarom", label: "Waarom SURF?" },
];

export default function Header() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when the section crosses just below the sticky header.
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0 min-w-0">
          <SurfMark height={36} />
          <div className="min-w-0 leading-tight">
            <div className="font-heading font-extrabold text-[15px] md:text-base truncate">
              Jasper Koning
            </div>
            <div className="text-[11px] md:text-[11.5px] text-black/55 truncate">
              Sollicitatie Productowner
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="relative px-3 py-2 text-[13px] font-heading font-bold text-black/70 hover:text-black transition-colors"
              >
                {n.label}
                <span
                  className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] bg-surf-orange rounded-full transition-all duration-300"
                  style={{
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </a>
            );
          })}
        </nav>
        <a
          href="https://linkedin.com/in/jasperkoning"
          target="_blank"
          rel="noreferrer"
          className="lg:hidden ml-auto text-sm font-semibold text-surf-orange hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
