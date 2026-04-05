// The SURF blob: outer contour of the SURF logo (a rounded rectangle with a
// smaller rounded rectangle attached at the bottom-right). Path taken from
// public/logo.svg.

export const SURF_PATH =
  "M190.344,64.9185 C198.996,64.9185 206,72.1547 206,81.0448 L206,91.3822 C206,100.2723 198.996,107.5084 190.344,107.5084 L166.654,107.5084 C158.002,107.5084 150.998,100.2723 150.998,91.3822 L150.998,84.973 C150.998,73.8087 142.14,64.9185 131.428,64.9185 L19.57,64.9185 C8.652,64.9185 0,56.0284 0,44.8641 L0,20.0545 C0,8.8901 8.858,0 19.57,0 L131.428,0 C142.346,0 150.998,8.8901 150.998,20.0545 L150.998,44.8641 C150.998,56.0284 159.856,64.9185 170.568,64.9185 L190.344,64.9185 Z";

export const SURF_VIEWBOX = "0 0 206 107.51";
export const SURF_RATIO = 206 / 107.51; // ≈ 1.916

// Decorative background blob in a flat color.
export default function Blob({ color = "#E67300", className = "", style = {} }) {
  return (
    <svg
      viewBox={SURF_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path d={SURF_PATH} fill={color} />
    </svg>
  );
}

// Image clipped to the SURF blob shape (like surf.nl uses for photos).
let _idCounter = 0;
export function ShapedImage({ src, alt = "", className = "", style = {} }) {
  // Unique per render so multiple instances don't collide on clipPath id.
  const id = `surf-clip-${++_idCounter}`;
  return (
    <svg
      viewBox={SURF_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid meet"
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      <defs>
        <clipPath id={id}>
          <path d={SURF_PATH} />
        </clipPath>
      </defs>
      <image
        href={src}
        x="0"
        y="0"
        width="206"
        height="107.51"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}

// Small "JK" monogram in the SURF blob shape, for header/footer.
export function SurfMark({ height = 40, color = "#E67300", textColor = "#ffffff" }) {
  const width = Math.round(height * SURF_RATIO);
  return (
    <svg
      width={width}
      height={height}
      viewBox={SURF_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d={SURF_PATH} fill={color} />
      <text
        x="75.5"
        y="32.5"
        fill={textColor}
        fontFamily="Nunito, system-ui, sans-serif"
        fontWeight="800"
        fontSize="38"
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing="1"
      >
        JK
      </text>
    </svg>
  );
}
