import { useState } from "react";
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
            <Hero />
            <Services />
            <Partners />
            <About />
            <WhyChooseUs />

          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
