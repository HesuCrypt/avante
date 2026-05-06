import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-scroll";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-slate-50"
    >
      {/* Animated Background */}
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
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-200/30 blur-[100px] will-change-transform"
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
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/20 blur-[100px] will-change-transform"
        />
        {/* Subtle grid pattern for corporate tech feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTAsIDYxLCAxNDUsIDAuMDUpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
        >
          <span className="gradient-text">Commerce</span>{" "}
          <span>that</span>
          <br />
          <span>Connects</span>
        </motion.h1>
      </div>

      {/* Bottom bar — "Check out our services" */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-full"
      >
        <div className="border-t border-slate-200" />
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="flex items-center justify-center py-6 cursor-pointer group hover:bg-slate-100/60 transition-colors w-full"
        >
          <span className="block w-full px-4 sm:px-8 text-xl md:text-3xl lg:text-4xl font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-slate-400 group-hover:text-avante-blue transition-colors text-center">
            Check out our services
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
