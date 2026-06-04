import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Vision from "./components/Vision";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import { EXPERTISE_SLIDES } from "./constants/expertise";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hash, setHash] = useState(window.location.hash);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    const handleHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  const isAbout = hash === "#about";
  const isCareer = hash === "#career";
  const isPrivacy = hash === "#privacy";
  const isTerms = hash === "#terms";
  const isServiceDetail = hash.startsWith("#service-");
  const serviceSlug = isServiceDetail ? hash.replace("#service-", "") : null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el, { offset: -96 });
      return true;
    }
    const top = window.scrollY + el.getBoundingClientRect().top - 96;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  };

  const handleBackToServices = () => {
    window.location.hash = "#services";
  };

  useEffect(() => {
    if (showSplash) return;
    const base = "Avante Digital Solutions";
    if (isAbout) {
      document.title = `About Us | ${base}`;
      return;
    }
    if (isCareer) {
      document.title = `Careers | ${base}`;
      return;
    }
    if (isPrivacy) {
      document.title = `Privacy Policy | ${base}`;
      return;
    }
    if (isTerms) {
      document.title = `Terms of Service | ${base}`;
      return;
    }
    if (isServiceDetail && serviceSlug) {
      const service = EXPERTISE_SLIDES.find((s) => s.slug === serviceSlug);
      document.title = service ? `${service.title} | ${base}` : base;
      return;
    }
    document.title = base;
  }, [isAbout, isCareer, isPrivacy, isTerms, isServiceDetail, serviceSlug, showSplash]);

  useEffect(() => {
    if (showSplash) return;
    if (isAbout || isCareer || isPrivacy || isTerms || isServiceDetail) {
      const tick = () => {
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      };
      window.requestAnimationFrame(tick);
    }
  }, [hash, isAbout, isCareer, isPrivacy, isTerms, isServiceDetail, showSplash]);

  useEffect(() => {
    if (showSplash) return;
    if (hash !== "#services") return;
    if (isAbout || isCareer || isPrivacy || isTerms || isServiceDetail) return;

    let attempts = 0;
    const maxAttempts = 180;
    const tick = () => {
      if (scrollToSection("services")) return;
      attempts += 1;
      if (attempts < maxAttempts) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  }, [hash, isAbout, isCareer, isPrivacy, isTerms, isServiceDetail, showSplash]);

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
              ) : isPrivacy ? (
                <motion.div
                  key="privacy"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="pt-24 min-h-[80vh]"
                >
                  <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                      <p className="text-sm font-bold text-avante-blue uppercase tracking-[0.3em] mb-3">
                        Privacy
                      </p>
                      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Privacy Policy
                      </h1>
                      <p className="text-slate-600 text-lg leading-relaxed mb-12">
                        This policy explains what information we collect, how we use it, and the choices you have when you
                        use Avante Digital Solutions.
                      </p>

                      <div className="space-y-10">
                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
                          <ul className="space-y-3 text-slate-600 leading-relaxed">
                            <li>Contact details you submit (name, email, company, message).</li>
                            <li>Usage data (pages viewed, approximate device/browser info) to improve performance.</li>
                            <li>Business communications you send to us (emails, inquiries, proposals).</li>
                          </ul>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">How We Use Information</h2>
                          <ul className="space-y-3 text-slate-600 leading-relaxed">
                            <li>Respond to inquiries and provide requested services.</li>
                            <li>Operate, maintain, and improve the website experience.</li>
                            <li>Send important updates related to your request or engagement.</li>
                          </ul>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Sharing</h2>
                          <p className="text-slate-600 leading-relaxed">
                            We may share information with trusted service providers who help us operate our website and
                            deliver services. We do not sell your personal information.
                          </p>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Your Choices</h2>
                          <ul className="space-y-3 text-slate-600 leading-relaxed">
                            <li>Request access, updates, or deletion of your information when applicable.</li>
                            <li>Opt out of non-essential communications at any time.</li>
                          </ul>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
                          <p className="text-slate-600 leading-relaxed">
                            Questions about privacy? Email{" "}
                            <a className="text-avante-blue font-semibold hover:underline" href="mailto:hello@avantedigital.com">
                              hello@avantedigital.com
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </motion.div>
              ) : isTerms ? (
                <motion.div
                  key="terms"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="pt-24 min-h-[80vh]"
                >
                  <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                      <p className="text-sm font-bold text-avante-blue uppercase tracking-[0.3em] mb-3">
                        Terms
                      </p>
                      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Terms of Service
                      </h1>
                      <p className="text-slate-600 text-lg leading-relaxed mb-12">
                        By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.
                      </p>

                      <div className="space-y-10">
                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Use of the Website</h2>
                          <ul className="space-y-3 text-slate-600 leading-relaxed">
                            <li>Use the site for lawful purposes only.</li>
                            <li>Do not attempt to disrupt, scrape, or reverse engineer site functionality.</li>
                            <li>Content may change or be removed at any time without notice.</li>
                          </ul>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Services & Engagements</h2>
                          <p className="text-slate-600 leading-relaxed">
                            Any project work, pricing, timelines, and deliverables are defined in a separate written agreement.
                            Website information is for general reference and does not constitute a binding offer.
                          </p>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Intellectual Property</h2>
                          <p className="text-slate-600 leading-relaxed">
                            All site content (text, visuals, branding) is owned by Avante Digital Solutions or its licensors and
                            may not be used without permission.
                          </p>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Disclaimers</h2>
                          <p className="text-slate-600 leading-relaxed">
                            The site is provided “as is” without warranties of any kind. We do not guarantee uninterrupted
                            availability or error-free operation.
                          </p>
                        </div>

                        <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
                          <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
                          <p className="text-slate-600 leading-relaxed">
                            Questions about these terms? Email{" "}
                            <a className="text-avante-blue font-semibold hover:underline" href="mailto:hello@avantedigital.com">
                              hello@avantedigital.com
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </motion.div>
              ) : isServiceDetail && serviceSlug ? (
                <motion.div
                  key={`service-${serviceSlug}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="pt-24 min-h-[80vh]"
                >
                  <ServiceDetail slug={serviceSlug} onBack={handleBackToServices} />
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
                  <Vision />
                  <WhyChooseUs />
                  <Contact />
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
