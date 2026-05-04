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
const LERP_FACTOR = 0.06;

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Carousel rotation ──────────────────────────────────────────────────────
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section id="services" ref={sectionRef} style={{ height: "400vh", position: "relative", background: "#fff" }}>
      {/* Sticky container holds the actual UI frozen on screen */}
      <div className="expertise-section" style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden" }}>
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
