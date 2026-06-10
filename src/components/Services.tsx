import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EXPERTISE_SLIDES, type ExpertiseSlide } from "../constants/expertise";

const TOTAL = EXPERTISE_SLIDES.length;
const ANGLE_PER_CARD = 360 / TOTAL;
const MAX_ROTATION = (TOTAL - 1) * ANGLE_PER_CARD;
const CAROUSEL_RADIUS = 1400;
const LERP_FACTOR = 0.06;

/**
 * Optimized Image Component with Shimmer Placeholder
 */
function OptimizedImage({ slide, isMobile }: { slide: ExpertiseSlide; isMobile: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);

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
  const gestureRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    startRotation: number;
    mode: "undecided" | "horizontal" | "vertical";
  }>({ pointerId: null, startX: 0, startY: 0, startRotation: 0, mode: "undecided" });

  // ── Carousel rotation ──────────────────────────────────────────────────────
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(CAROUSEL_RADIUS);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(350);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setRadius(700);
        setIsMobile(false);
      } else {
        setRadius(CAROUSEL_RADIUS);
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ─── Scroll listener — maps scroll progress to rotation ────────────────────
  useEffect(() => {
    if (isMobile) return;
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
  }, [isMobile]);

  // ─── rAF loop — smooth rotation ───────────────────────────────────────────
  useEffect(() => {
    if (!isInView) return;
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
  }, [isInView]);

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

  const goToIndex = (i: number) => {
    const clampedIndex = Math.max(0, Math.min(TOTAL - 1, i));
    targetRotationRef.current = clampedIndex * ANGLE_PER_CARD;
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    gestureRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startRotation: targetRotationRef.current,
      mode: "undecided",
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    if (g.pointerId !== e.pointerId) return;
    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);

    if (g.mode === "undecided") {
      if (ax < 8 && ay < 8) return;
      if (ax > ay) {
        g.mode = "horizontal";
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      } else {
        g.mode = "vertical";
        g.pointerId = null;
        return;
      }
    }

    if (g.mode !== "horizontal") return;
    e.preventDefault();
    const sensitivity = 0.18;
    targetRotationRef.current = g.startRotation - dx * sensitivity;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    if (g.pointerId !== e.pointerId) return;
    if (g.mode === "horizontal") {
      const snapped = Math.round(targetRotationRef.current / ANGLE_PER_CARD);
      const clamped = Math.max(0, Math.min(TOTAL - 1, snapped));
      targetRotationRef.current = clamped * ANGLE_PER_CARD;
    }
    g.pointerId = null;
    g.mode = "undecided";
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  if (isMobile) {
    return (
      <section id="services" ref={sectionRef} className="bg-avante-blue">
        <div className="expertise-section">
          <p className="expertise-label">SERVICES</p>

          <div
            className="carousel-component"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
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
                      <OptimizedImage slide={slide} isMobile />
                      <div className="card-text card-text-mobile">
                        <h2 className="heading">{slide.title}</h2>
                        <p className="card-subtitle">{slide.subtitle}</p>
                        <a className="btn-cta" href={`#service-${slide.slug}`}>learn more</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-arrow-wrap">
              <button className="arrow-prev" onClick={() => goToIndex(activeIndex - 1)} aria-label="Previous expertise">
                <ArrowLeft size={16} />
              </button>
              <button className="arrow-next" onClick={() => goToIndex(activeIndex + 1)} aria-label="Next expertise">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                    <OptimizedImage slide={slide} isMobile={false} />
                    <div className="card-text card-text-desktop">
                      <h2 className="heading">{slide.title}</h2>
                      <p className="card-subtitle">{slide.subtitle}</p>
                      <a className="btn-cta" href={`#service-${slide.slug}`}>learn more</a>
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


        </div>
      </div>
    </section>
  );
}
