'use client';

interface GeometricBackgroundProps {
  className?: string;
  patternId?: string;
}

export default function GeometricBackground({
  className = '',
  patternId = 'gold-geom-pattern',
}: GeometricBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 select-none ${className}`}
    >
      <svg
        className="gold-geometric-svg w-full h-full opacity-[0.11] transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={patternId}
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Moldura externa sutil */}
            <path
              d="M0 0h120v120H0z"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.6"
            />
            {/* Linhas diagonais cruzadas */}
            <path
              d="M0 0l120 120M120 0L0 120"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.6"
            />
            {/* Losango geométrico central */}
            <path
              d="M60 0l60 60-60 60-60-60z"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.8"
            />
            {/* Marcadores de vértice dourados elegantes */}
            <circle cx="60" cy="60" r="2.5" fill="#C9A84C" />
            <circle cx="0" cy="0" r="2" fill="#C9A84C" />
            <circle cx="120" cy="0" r="2" fill="#C9A84C" />
            <circle cx="0" cy="120" r="2" fill="#C9A84C" />
            <circle cx="120" cy="120" r="2" fill="#C9A84C" />
            <circle cx="60" cy="0" r="1.5" fill="#C9A84C" />
            <circle cx="60" cy="120" r="1.5" fill="#C9A84C" />
            <circle cx="0" cy="60" r="1.5" fill="#C9A84C" />
            <circle cx="120" cy="60" r="1.5" fill="#C9A84C" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
