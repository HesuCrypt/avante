import { motion } from "motion/react";
import { Rocket, Globe, Sparkles } from "lucide-react";

const visionPillars = [
  {
    icon: Rocket,
    title: "Pioneer Digital Commerce",
    description:
      "We envision a future where every brand, regardless of size, has access to world-class digital commerce strategies that drive real revenue and lasting customer relationships.",
  },
  {
    icon: Globe,
    title: "Connect Markets Seamlessly",
    description:
      "Breaking down barriers between creators and consumers across Southeast Asia and beyond — building bridges through live streaming, storytelling, and authentic engagement.",
  },
  {
    icon: Sparkles,
    title: "Set the Standard",
    description:
      "To be the benchmark for digital excellence — where data-driven creativity meets human connection, and every campaign we touch becomes the new industry standard.",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative py-28 md:py-36 overflow-hidden bg-white"
    >
      {/* ── Background Layers ─────────────────────────────────────── */}
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white pointer-events-none" />
      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTAsIDYxLCAxNDUsIDAuMDQpIi8+PC9zdmc+')] opacity-60 pointer-events-none" />
      {/* Floating accent blob */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] rounded-full bg-blue-200/25 blur-[120px] pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[-6%] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[100px] pointer-events-none will-change-transform"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold text-avante-blue uppercase tracking-[0.3em] mb-4"
          >
            Our Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
          >
            Shaping the Future of{" "}
            <span className="text-avante-blue">Digital Commerce</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We see a world where technology amplifies human connection —
            where every brand can tell its story, reach its audience, and
            grow without limits.
          </motion.p>
        </div>

        {/* ── Decorative Line ─────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-px bg-gradient-to-r from-transparent via-avante-blue/25 to-transparent mb-20 origin-center"
        />

        {/* ── Vision Pillar Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {visionPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative rounded-2xl p-8 lg:p-10 border border-slate-200/80 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-avante-blue/20 hover:-translate-y-1 transition-all duration-400 ease-out overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50/40 rounded-bl-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                {/* Numbering */}
                <span className="relative z-10 block text-[10px] font-bold text-avante-blue/30 tracking-[0.35em] uppercase mb-6">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-avante-blue/[0.06] flex items-center justify-center mb-6 group-hover:bg-avante-blue/[0.12] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-avante-blue" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="relative z-10 text-slate-500 text-sm lg:text-base leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-avante-blue/0 via-avante-blue/40 to-avante-blue/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Statement ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-sm font-medium tracking-wide max-w-lg mx-auto leading-relaxed">
            We don't just adapt to the future of commerce —{" "}
            <span className="text-avante-blue font-semibold">we build it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
