"use client";

import { useState } from "react";

// Tilted rounded-rectangle portrait in the hero. Loads /jasper.jpg;
// falls back to a clean grey placeholder if the file is missing.
export default function HeroPhoto() {
  const [failed, setFailed] = useState(false);

  const commonStyle = { transform: "rotate(-2deg)" };
  const commonClass =
    "relative w-full h-full rounded-[20px] shadow-[0_25px_50px_-18px_rgba(0,0,0,0.30)]";

  return (
    <div className="relative w-full max-w-[480px] mx-auto md:ml-auto md:mr-0 aspect-[4/5]">
      {failed ? (
        <div
          className={`${commonClass} bg-black/[0.06] border border-black/[0.08] flex items-center justify-center overflow-hidden`}
          style={commonStyle}
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
          className={`${commonClass} object-cover`}
          style={commonStyle}
        />
      )}
    </div>
  );
}
