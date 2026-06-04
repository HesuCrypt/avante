import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-scroll";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative h-svh min-h-[560px] flex flex-col overflow-hidden bg-slate-50"
    >
      {/* ── Animated Background ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-slate-50 to-white" />
        <motion.div
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : {
                y: [0, -20, 0],
                opacity: [0.4, 0.6, 0.4],
              }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.2 }
              : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
          }
          className="absolute top-[-20%] right-[-10%] w-[min(800px,120vw)] h-[min(800px,120vw)] rounded-full bg-blue-200/30 blur-[80px] sm:blur-[100px] will-change-transform"
        />
        <motion.div
          animate={
            prefersReducedMotion
              ? { opacity: 0.3 }
              : {
                y: [0, 20, 0],
                opacity: [0.3, 0.5, 0.3],
              }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.2 }
              : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
          }
          className="absolute bottom-[-20%] left-[-10%] w-[min(600px,100vw)] h-[min(600px,100vw)] rounded-full bg-blue-300/20 blur-[80px] sm:blur-[100px] will-change-transform"
        />
        {/* Subtle grid pattern for corporate tech feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTAsIDYxLCAxNDUsIDAuMDUpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* ── Content — vertically & horizontally centered ──────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-5 sm:px-6 lg:px-12">
        <div className="w-full max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <div className="text-[19vw] sm:text-[14vw] md:text-[11rem] lg:text-[13rem] font-extralight tracking-tighter leading-[0.82] text-avante-blue -ml-1 sm:-ml-2 md:-ml-4">
              Commerce
            </div>
            <div className="w-full mt-1 sm:mt-2 md:mt-4 pl-[6%] sm:pl-[10%] md:pl-[15%]">
              <div className="text-[13vw] sm:text-[10vw] md:text-[8rem] lg:text-[9rem] font-extralight tracking-tighter leading-[0.82] text-slate-800 italic">
                that connects.
              </div>
            </div>
          </motion.h1>
        </div>
      </div>

      {/* ── Scroll down indicator ───────────────────────────────── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none select-none">
        <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400">Scroll</span>
        <div className="w-[1.5px] h-8 bg-slate-200 relative overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: [-32, 32],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-avante-blue rounded-full"
          />
        </div>
      </div>

      {/* ── Bottom bar — "Check out our services" ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-full shrink-0"
      >
        <div className="border-t border-slate-200/50" />
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="flex items-center justify-center py-4 sm:py-6 cursor-pointer group bg-gradient-to-b from-slate-50 to-[#0A3D91] hover:to-[#051C45] transition-all w-full"
        >
          <span className="block w-full px-4 sm:px-8 text-[3.2vw] sm:text-xl md:text-2xl lg:text-3xl font-black tracking-[0.2em] sm:tracking-[0.5em] uppercase text-white/80 group-hover:text-white transition-colors text-center">
            Check out our services
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
