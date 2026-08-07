"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const states = [
  { label: "Norte", x: 78, y: 112 },
  { label: "Nordeste", x: 196, y: 172 },
  { label: "Centro-Oeste", x: 128, y: 224 },
  { label: "Sudeste", x: 170, y: 240 },
  { label: "Sul", x: 158, y: 268 },
];

const regionLabels = ["N", "NE", "CO", "SE", "S"];

export function BrazilMap() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px]"
      role="img"
      aria-label="Mapa do Brasil com destaque para atendimento presencial em Codó, no Maranhão, e online em todo o país"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto size-[70%] rounded-full bg-gold-400/20 blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg
          viewBox="0 0 280 320"
          fill="none"
          className="h-auto w-full drop-shadow-[0_0_40px_rgba(212,175,55,0.25)]"
        >
          <defs>
            <linearGradient id="br-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2E2E2E" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </linearGradient>
            <radialGradient id="br-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="140" cy="160" r="130" fill="url(#br-glow)" />

          <path
            d="M 46 62
              C 62 52 88 44 108 42
              C 124 41 136 44 148 48
              C 160 52 172 60 182 72
              C 192 84 202 94 210 102
              C 218 110 228 114 235 122
              C 239 128 240 136 236 142
              C 232 148 224 154 216 162
              C 208 170 200 178 196 188
              C 192 198 188 210 186 222
              C 184 234 180 246 174 258
              C 170 266 166 274 160 282
              C 156 288 152 292 148 296
              C 144 300 140 298 138 292
              C 134 284 130 274 124 264
              C 118 254 110 246 102 240
              C 94 234 86 226 78 214
              C 70 202 62 194 54 186
              C 48 180 44 172 40 162
              C 36 152 32 142 30 132
              C 29 124 30 114 34 104
              C 38 94 40 86 42 78
              C 43 72 44 66 46 62 Z"
            fill="url(#br-fill)"
            stroke="#D4AF37"
            strokeOpacity="0.75"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          <path
            d="M 46 62
              C 62 52 88 44 108 42
              C 124 41 136 44 148 48
              C 160 52 172 60 182 72
              C 192 84 202 94 210 102
              C 218 110 228 114 235 122
              C 239 128 240 136 236 142
              C 232 148 224 154 216 162
              C 208 170 200 178 196 188
              C 192 198 188 210 186 222
              C 184 234 180 246 174 258
              C 170 266 166 274 160 282
              C 156 288 152 292 148 296
              C 144 300 140 298 138 292
              C 134 284 130 274 124 264
              C 118 254 110 246 102 240
              C 94 234 86 226 78 214
              C 70 202 62 194 54 186
              C 48 180 44 172 40 162
              C 36 152 32 142 30 132
              C 29 124 30 114 34 104
              C 38 94 40 86 42 78
              C 43 72 44 66 46 62 Z"
            fill="none"
            stroke="#D4AF37"
            strokeOpacity="0.25"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {states.map((state, index) => (
            <g key={state.label}>
              <circle cx={state.x} cy={state.y} r="10" fill="#D4AF37" fillOpacity="0.12">
                <animate
                  attributeName="r"
                  values="6;14;6"
                  dur="2.6s"
                  begin={`${index * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.25;0;0.25"
                  dur="2.6s"
                  begin={`${index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={state.x} cy={state.y} r="3.5" fill="#D4AF37" />
              <text
                x={state.x + 10}
                y={state.y + 4}
                fill="#E9CE6E"
                fontSize="9"
                fontWeight="600"
                letterSpacing="0.08em"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {regionLabels[index]}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {states.map((state) => (
          <span
            key={state.label}
            className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground"
          >
            <MapPin className="size-3.5 text-gold-400" aria-hidden="true" />
            {state.label}
          </span>
        ))}
      </div>
    </div>
  );
}
