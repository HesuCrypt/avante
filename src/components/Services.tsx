import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = { title: string; subtitle: string; image: string };

const slides: Slide[] = [
  { title: "ECOMMERCE ACCOUNT MANAGEMENT", subtitle: "End-to-end management of your online store for maximum growth.", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80" },
  { title: "PERFORMANCE MARKETING", subtitle: "Data-driven campaigns that convert and scale your revenue.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" },
  { title: "SOCIAL MEDIA MANAGEMENT", subtitle: "Strategic content and community management across all platforms.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80" },
  { title: "LIVESTREAM", subtitle: "High-impact live selling and streaming production.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80" },
  { title: "AFFILIATE MANAGEMENT", subtitle: "Build and manage affiliate networks that drive consistent sales.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" },
  { title: "CUSTOMER SERVICE", subtitle: "Exceptional support systems that retain and delight customers.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80" },
];

const TOTAL = slides.length;
const ANGLE_PER_CARD = 360 / TOTAL;
const MAX_ROTATION = (TOTAL - 1) * ANGLE_PER_CARD;
const CAROUSEL_RADIUS = 980;
const WHEEL_SENSITIVITY = 0.3;
const LERP_FACTOR = 0.08;
const ENTRY_BUFFER = 80; // px — proximity to sectionLockY that triggers the lock

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Carousel rotation (rAF-driven) ─────────────────────────────────────────
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  // ── Lock state ─────────────────────────────────────────────────────────────
  const sectionLockYRef = useRef<number | null>(null); // exact scrollY to lock at
  const isLockedRef = useRef(false);
  const isReleasingRef = useRef(false);
  const hasSeenLastCardRef = useRef(false);
  const hasSeenFirstCardRef = useRef(true);

  // ── React state (JSX only) ─────────────────────────────────────────────────
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [counterVisible, setCounterVisible] = useState(true);

  // ─── Lock helpers ──────────────────────────────────────────────────────────
  const engageLock = () => {
    if (isLockedRef.current || isReleasingRef.current) return;
    isLockedRef.current = true;
    sectionLockYRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  // ─── rAF loop — rotation + flag updates ───────────────────────────────────
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      const next = currentRotationRef.current +
        (targetRotationRef.current - currentRotationRef.current) * LERP_FACTOR;
      currentRotationRef.current = next;

      const clamped = Math.max(0, Math.min(TOTAL - 1, Math.round(next / ANGLE_PER_CARD)));

      if (clamped >= TOTAL - 1 && !hasSeenLastCardRef.current) {
        hasSeenLastCardRef.current = true;
        setCounterVisible(false);
      }
      if (clamped <= 0 && !hasSeenFirstCardRef.current) {
        hasSeenFirstCardRef.current = true;
      }

      setCurrentRotation(next);
      setActiveIndex(clamped);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // ─── Calculate sectionLockY on mount + resize ──────────────────────────────
  useEffect(() => {
    const calculate = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Lock position: section top aligned with a small top offset so it's
      // fully visible and centered in the viewport when locked.
      sectionLockYRef.current = window.scrollY + rect.top - window.innerHeight * 0.05;
    };

    calculate(); // run immediately after mount
    window.addEventListener("resize", calculate);
    // Also recalculate once all images/fonts have loaded (layout may shift)
    window.addEventListener("load", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
      window.removeEventListener("load", calculate);
    };
  }, []);

  // ─── Scroll listener — detect entry into lock zone ────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (isLockedRef.current) return;
      if (sectionLockYRef.current === null) return;

      const scrollY = window.scrollY;
      const lockY = sectionLockYRef.current;
      const nearSection =
        scrollY >= lockY - ENTRY_BUFFER && scrollY <= lockY + ENTRY_BUFFER;

      if (!nearSection) return;

      if (!hasSeenLastCardRef.current) {
        // Entering from above (going down) — must see all cards forward
        hasSeenFirstCardRef.current = true;
        hasSeenLastCardRef.current = false;
        targetRotationRef.current = 0;
        setCounterVisible(true);
        engageLock();
        return;
      }

      // Entering from below (going up) — must scroll back to card 1
      hasSeenFirstCardRef.current = false;
      targetRotationRef.current = MAX_ROTATION;
      setCounterVisible(false);
      engageLock();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Wheel listener — drives carousel while locked, releases on gate clear ─
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isReleasingRef.current) return;
      if (!isLockedRef.current) return;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      // Gate cleared going down — release immediately
      if (goingDown && hasSeenLastCardRef.current) {
        isLockedRef.current = false;
        isReleasingRef.current = true;

        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.height = "";
        document.documentElement.style.height = "";

        window.removeEventListener("wheel", onWheel);

        setTimeout(() => {
          isReleasingRef.current = false;
          window.addEventListener("wheel", onWheel, { passive: false });
        }, 1000);
        return; // do NOT call preventDefault — let this scroll through
      }

      // Gate cleared going up — release immediately
      if (goingUp && hasSeenFirstCardRef.current && currentRotationRef.current <= 2) {
        isLockedRef.current = false;
        isReleasingRef.current = true;

        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.height = "";
        document.documentElement.style.height = "";

        window.removeEventListener("wheel", onWheel);

        setTimeout(() => {
          isReleasingRef.current = false;
          window.addEventListener("wheel", onWheel, { passive: false });
        }, 1000);
        return; // do NOT call preventDefault
      }

      // Gate not cleared — block scroll and spin carousel
      e.preventDefault();

      const next = targetRotationRef.current + e.deltaY * WHEEL_SENSITIVITY;
      targetRotationRef.current = Math.max(0, Math.min(next, MAX_ROTATION));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, []);

  // ─── Arrow navigation ──────────────────────────────────────────────────────
  const scrollToIndex = (i: number) => {
    targetRotationRef.current = Math.max(0, Math.min(TOTAL - 1, i)) * ANGLE_PER_CARD;
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="services" ref={sectionRef} className="expertise-section">
      <p className="expertise-label">OUR EXPERTISE</p>
      <div className="carousel-component">
        <div
          className="carousel-track"
          style={{ transform: `translateZ(-${CAROUSEL_RADIUS}px) rotateY(${-currentRotation}deg)` }}
        >
          <div className="carousel-content-wrap">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`carousel-content-item ${index === activeIndex ? "is-active" : ""}`}
                data-panel={index}
                style={{ transform: `rotateY(${index * ANGLE_PER_CARD}deg) translateZ(${CAROUSEL_RADIUS}px)` }}
              >
                <div className="card-inner">
                  <img src={slide.image} alt={slide.title} loading="lazy" decoding="async" draggable={false} />
                  <div className="card-text">
                    <h2 className="heading">{slide.title}</h2>
                    <p className="card-subtitle">{slide.subtitle}</p>
                    <a className="btn-cta" href="#contact">learn more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-arrow-wrap">
          <button className="arrow-prev" onClick={() => scrollToIndex(activeIndex - 1)} aria-label="Previous expertise">
            <ArrowLeft size={16} />
          </button>
          <button className="arrow-next" onClick={() => scrollToIndex(activeIndex + 1)} aria-label="Next expertise">
            <ArrowRight size={16} />
          </button>
        </div>

        <div
          className="carousel-counter"
          style={{ opacity: counterVisible ? 1 : 0 }}
          aria-live="polite"
          aria-label={`Card ${activeIndex + 1} of ${TOTAL}`}
        >
          {pad(activeIndex + 1)}&nbsp;/&nbsp;{pad(TOTAL)}
        </div>
      </div>
    </section>
  );
}
