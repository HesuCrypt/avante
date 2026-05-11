import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import WhyChooseUs from "./components/WhyChooseUs";

import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const isAbout = hash.includes("about");

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
            {isAbout ? (
              <div className="pt-24 min-h-[80vh]">
                <About />
              </div>
            ) : (
              <>
                <Hero />
                <Services />
                <Partners />
                <WhyChooseUs />
              </>
            )}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
