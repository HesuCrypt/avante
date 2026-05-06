import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EXPERTISE_SLIDES, type ExpertiseSlide } from "../constants/expertise";

const TOTAL = EXPERTISE_SLIDES.length;
const ANGLE_PER_CARD = 360 / TOTAL;
const MAX_ROTATION = (TOTAL - 1) * ANGLE_PER_CARD;
const CAROUSEL_RADIUS = 980;
const LERP_FACTOR = 0.06;

/**
 * Optimized Image Component with Shimmer Placeholder
 */
function OptimizedImage({ slide }: { slide: ExpertiseSlide }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const src = (isMobile && slide.mobileImage) ? slide.mobileImage : slide.image;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!isLoaded && <div className="absolute inset-0 image-placeholder z-0" />}
      <img
        src={src}
        alt={slide.title}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        className={`img-optimized ${isLoaded ? "is-loaded" : ""} absolute inset-0 w-full h-full object-cover`}
      />
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Carousel rotation ──────────────────────────────────────────────────────
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(CAROUSEL_RADIUS);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(280);
      } else if (window.innerWidth < 1024) {
        setRadius(650);
      } else {
        setRadius(CAROUSEL_RADIUS);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ─── Scroll listener — maps scroll progress to rotation ────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      const scrollableDistance = rect.height - window.innerHeight;
      let progress = 0;

      if (scrollableDistance > 0) {
        // -rect.top is the distance scrolled into the section
        progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      }

      targetRotationRef.current = progress * MAX_ROTATION;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to handle initial scroll position (e.g. page reload)
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── rAF loop — smooth rotation ───────────────────────────────────────────
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      const next = currentRotationRef.current +
        (targetRotationRef.current - currentRotationRef.current) * LERP_FACTOR;
      currentRotationRef.current = next;

      const clamped = Math.max(0, Math.min(TOTAL - 1, Math.round(next / ANGLE_PER_CARD)));

      setCurrentRotation(next);
      setActiveIndex(clamped);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // ─── Arrow navigation ──────────────────────────────────────────────────────
  const scrollToIndex = (i: number) => {
    if (!sectionRef.current) return;
    const clampedIndex = Math.max(0, Math.min(TOTAL - 1, i));
    const progress = clampedIndex / (TOTAL - 1);

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrollableDistance = rect.height - window.innerHeight;

    // Scroll the window to the correct percentage of the sticky section
    window.scrollTo({
      top: sectionTop + progress * scrollableDistance,
      behavior: "smooth"
    });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="services" ref={sectionRef} className="services-container">
      {/* Sticky container holds the actual UI frozen on screen */}
      <div className="expertise-section" style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden" }}>
        <p className="expertise-label">SERVICES</p>
        <div className="carousel-component">
          <div
            className="carousel-track"
            style={{ transform: `translateZ(-${radius}px) rotateY(${-currentRotation}deg)` }}
          >
            <div className="carousel-content-wrap">
              {EXPERTISE_SLIDES.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`carousel-content-item ${index === activeIndex ? "is-active" : ""}`}
                  data-panel={index}
                  style={{ transform: `rotateY(${index * ANGLE_PER_CARD}deg) translateZ(${radius}px)` }}
                >
                  <div className="card-inner">
                    <OptimizedImage slide={slide} />
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
            aria-live="polite"
            aria-label={`Card ${activeIndex + 1} of ${TOTAL}`}
          >
            {pad(activeIndex + 1)}&nbsp;/&nbsp;{pad(TOTAL)}
          </div>
        </div>
      </div>
    </section>
  );
}
