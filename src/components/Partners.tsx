import { useState } from "react";
import { motion } from "motion/react";
import { PARTNERS, Partner } from "../constants/partners";

export default function Partners() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const getHoverColor = (partner: Partner) => {
    if (partner.name === "ISSY" || partner.name === "BLANC NUE") {
      return "#FFFFFF";
    }
    return partner.color;
  };

  return (
    <div id="partners" className="py-6 overflow-hidden relative z-20">
      {/* Subtle section label */}
      <div className="text-center mb-5">
        <span className="text-xs font-bold text-blue-400/60 uppercase tracking-[0.25em] select-none">
          Trusted by
        </span>
      </div>

      {/* Infinite Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="logo-marquee-container logo-marquee-mask py-2"
      >
        <div className="flex flex-row flex-nowrap w-max animate-logo-marquee hover:[animation-play-state:paused] will-change-transform">
          {/* First track set */}
          <div className="flex shrink-0 items-center gap-4 md:gap-6 pr-4 md:pr-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                onMouseEnter={() => setHoveredName(partner.name)}
                onMouseLeave={() => setHoveredName(null)}
                className="flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 transform hover:-translate-y-0.5 select-none shrink-0 cursor-pointer"
              >
                <span
                  className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    color: hoveredName === partner.name ? getHoverColor(partner) : "rgba(255, 255, 255, 0.5)"
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second track set (exact duplicate for seamless loop) */}
          <div className="flex shrink-0 items-center gap-4 md:gap-6 pr-4 md:pr-6" aria-hidden="true">
            {PARTNERS.map((partner) => (
              <div
                key={`${partner.name}-dup`}
                onMouseEnter={() => setHoveredName(partner.name)}
                onMouseLeave={() => setHoveredName(null)}
                className="flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 transform hover:-translate-y-0.5 select-none shrink-0 cursor-pointer"
              >
                <span
                  className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    color: hoveredName === partner.name ? getHoverColor(partner) : "rgba(255, 255, 255, 0.5)"
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
