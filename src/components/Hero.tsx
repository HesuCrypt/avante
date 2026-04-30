import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-scroll";

const highlightText = "Digital Innovation";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Animated Background - More Stable and Subdued */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-avante-blue text-xs font-bold tracking-wider uppercase mb-8 border border-blue-100 shadow-sm">
            Digital Excellence Redefined
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          Elevating Brands Through <br className="hidden md:block" />
          <span className="gradient-text inline-flex flex-wrap justify-center gap-x-0.5">
            {highlightText.split("").map((char, index) => (
              <motion.span
                key={`hero-char-${index}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.62 + index * 0.018, duration: 0.36 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We specialize in high-impact live streaming, data-driven digital marketing, 
          and e-commerce growth strategies that propel your brand forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group px-8 py-4 bg-avante-blue text-white rounded-full font-semibold text-lg hover:bg-avante-dark transition-all shadow-lg hover:shadow-avante-blue/30 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="group px-8 py-4 bg-white text-slate-700 border border-slate-200 shadow-sm rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            <Play className="w-4 h-4 fill-current text-avante-blue group-hover:text-avante-dark transition-colors" />
            Our Expertise
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
