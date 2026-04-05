"use client";

import { useState } from "react";

// Tilted rounded-rectangle portrait in the hero. Attempts to load
// /jasper.jpg; if that file is not present the grey placeholder is shown.
export default function HeroPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative w-full max-w-[420px] mx-auto md:ml-auto md:mr-0 aspect-[4/5]">
      {/* soft offset shadow tile for depth */}
      <div
        className="absolute inset-0 rounded-[22px] bg-surf-orange/15"
        style={{ transform: "rotate(-4deg) translate(-10px, 12px)" }}
        aria-hidden
      />
      {failed ? (
        <div
          className="relative w-full h-full rounded-[22px] bg-black/[0.06] border border-black/[0.08] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden"
          style={{ transform: "rotate(-2.5deg)" }}
          aria-label="Placeholder voor portretfoto"
        >
          <div className="text-center text-black/40">
            <div className="font-heading font-extrabold text-2xl tracking-tight">
              Foto
            </div>
            <div className="text-xs mt-1">plaats /public/jasper.jpg</div>
          </div>
        </div>
      ) : (
        <img
          src="/jasper.jpg"
          alt="Jasper Koning"
          onError={() => setFailed(true)}
          className="relative w-full h-full object-cover rounded-[22px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
          style={{ transform: "rotate(-2.5deg)" }}
        />
      )}
    </div>
  );
}
