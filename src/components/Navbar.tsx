import { useEffect, useState, type MouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { Link } from "react-scroll";
import { createPortal } from "react-dom";

const navLinks = [
  { name: "Home", to: "" },
  { name: "Services", to: "services" },
  { name: "Vision", to: "vision" },
  { name: "Partners", to: "partners" },
  { name: "Why Us", to: "why-us" },
  { name: "Contact Us", to: "contact" },
  { name: "About Us", to: "about", isPage: true },
  { name: "Careers", to: "career", isPage: true },
];

const menuVariants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.12, staggerChildren: 0.07 } },
};

const menuItemVariants = {
  closed: { opacity: 0, x: 26 },
  open: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const sectionIds = ["hero", "services", "vision", "partners", "why-us", "contact"];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.location.hash !== "" && window.location.hash !== "#") {
      window.location.hash = "";
      window.setTimeout(scrollToHero, 50);
      return;
    }
    scrollToHero();
  };

  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.dataset.menuOpen = "true";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      delete document.body.dataset.menuOpen;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      delete document.body.dataset.menuOpen;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-sm py-3 border-slate-200" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-end relative">
        <a
          href="#"
          onClick={handleBrandClick}
          className="cursor-pointer flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
          aria-label="Go to home"
        >
          <span className={`font-black text-lg md:text-xl tracking-[0.22em] uppercase ${isScrolled ? "text-slate-900" : "text-avante-blue"}`}>
            Avante Digital
          </span>
        </a>

        <motion.button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className={`inline-flex items-center gap-2 text-sm md:text-base font-semibold transition-colors ${
            isScrolled ? "text-slate-800 hover:text-avante-blue" : "text-avante-blue hover:text-avante-dark"
          }`}
        >
          <motion.span
            animate={{ y: isMenuOpen ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Explore
          </motion.span>
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Plus size={18} />
          </motion.span>
        </motion.button>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 z-[200]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="absolute inset-0 bg-avante-dark/82"
                  onClick={() => setIsMenuOpen(false)}
                  aria-hidden="true"
                />
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 250, damping: 28 }}
                  className="absolute right-0 top-0 z-[201] h-full w-full sm:w-[75%] lg:w-[42rem] bg-avante-light text-avante-dark rounded-l-3xl p-6 md:p-10 flex flex-col border-l border-slate-300 shadow-[0_30px_90px_rgba(5,28,69,0.32)] overflow-hidden"
                >
                  <motion.div
                    className="flex items-center justify-between mb-8 md:mb-10"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.1 }}
                  >
                    <span className="font-black tracking-[0.22em] uppercase text-avante-blue">Avante Digital</span>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 font-semibold text-avante-blue"
                    >
                      Close <X size={18} />
                    </motion.button>
                  </motion.div>

                  <motion.nav
                    className="space-y-3 md:space-y-5 mb-10 overflow-hidden"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {navLinks.map((link) => {
                      const isActive = link.to === ""
                        ? (activeSection === "hero" || activeSection === "")
                        : (activeSection === link.to);
                      const linkClass = `flex items-center justify-between text-[clamp(1.5rem,8vw,3.5rem)] md:text-[clamp(1.5rem,8vw,4rem)] leading-[0.95] font-black uppercase tracking-tight transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-slate-900 border-l-4 border-avante-blue pl-4"
                          : "text-avante-blue/90 hover:text-avante-dark hover:pl-2"
                      }`;

                      return (
                        <motion.div
                          key={link.name}
                          variants={menuItemVariants}
                          transition={{ duration: 0.24 }}
                        >
                          {link.isPage || link.to === "" ? (
                            <a
                              href={`#${link.to}`}
                              onClick={(e) => {
                                setIsMenuOpen(false);
                                if (link.to === "") {
                                  if (window.location.hash !== "" && window.location.hash !== "#") {
                                    // Let default hash change happen to return to home
                                  } else {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                } else if (window.location.hash === `#${link.to}`) {
                                  e.preventDefault();
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                              }}
                              className={linkClass}
                            >
                              {link.name}
                              <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 shrink-0" />
                            </a>
                          ) : (
                            <Link
                              to={link.to}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              onClick={() => {
                                setIsMenuOpen(false);
                                if (window.location.hash !== "" && window.location.hash !== "#") {
                                  window.location.hash = "";
                                  setTimeout(() => {
                                    const el = document.getElementById(link.to);
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                  }, 100);
                                }
                              }}
                              className={linkClass}
                            >
                              {link.name}
                              <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 shrink-0" />
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.nav>

                  <motion.div
                    className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.28 }}
                  >
                    <div>
                      <p className="font-semibold text-avante-dark/70 mb-2">Email</p>
                      <p className="font-medium break-all">hello@avantedigital.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-avante-dark/70 mb-2">Location</p>
                      <p className="font-medium">Makati, Metro Manila</p>
                    </div>
                  </motion.div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </motion.nav>
  );
}
