import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import WhyChooseUs from "./components/WhyChooseUs";
import Career from "./components/Career";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const handleHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      lenis.destroy();
    };
  }, []);

  const isAbout = hash === "#about";
  const isCareer = hash === "#career";

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <IntroSplash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-avante-blue selection:text-white">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              {isAbout ? (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="pt-24 min-h-[80vh]"
                >
                  <About />
                </motion.div>
              ) : isCareer ? (
                <motion.div
                  key="career"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="pt-24 min-h-[80vh]"
                >
                  <Career />
                </motion.div>
              ) : (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Hero />
                  <Services />
                  <Partners />
                  <WhyChooseUs />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

