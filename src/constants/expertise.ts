/**
 * EXPERTISE SECTION IMAGES & CONTENT
 * 
 * --- HOW TO REPLACE IMAGES LOCALLY ---
 * 1. Go to the folder: /public/assets/expertise/
 * 2. Place your new images in that folder.
 * 3. Update the file names in the 'image' and 'mobileImage' fields below.
 * 
 * FOR BEST RESULTS:
 * - Use .jpg or .webp formats.
 * - Aspect Ratio: 16:9 (Desktop) / 4:5 (Mobile).
 * - Dimensions: ~1400px wide (Desktop) / ~800px wide (Mobile).
 */

export type ExpertiseSlide = {
  title: string;
  subtitle: string;
  image: string;
  mobileImage?: string;
};

export const EXPERTISE_SLIDES: ExpertiseSlide[] = [
  {
    title: "ECOMMERCE ACCOUNT MANAGEMENT",
    subtitle: "End-to-end management of your online store for maximum growth.",
    image: "/assets/expertise/ecommerce-desktop.jpg",
    mobileImage: "/assets/expertise/ecommerce-mobile.jpg"
  },
  {
    title: "PERFORMANCE MARKETING",
    subtitle: "Data-driven campaigns that convert and scale your revenue.",
    image: "/assets/expertise/marketing-desktop.jpg",
    mobileImage: "/assets/expertise/marketing-mobile.jpg"
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "Strategic content and community management across all platforms.",
    image: "/assets/expertise/social-desktop.jpg",
    mobileImage: "/assets/expertise/social-mobile.jpg"
  },
  {
    title: "LIVESTREAM",
    subtitle: "High-impact live selling and streaming production.",
    image: "/assets/expertise/livestream-desktop.jpg",
    mobileImage: "/assets/expertise/livestream-mobile.jpg"
  },
  {
    title: "AFFILIATE MANAGEMENT",
    subtitle: "Build and manage affiliate networks that drive consistent sales.",
    image: "/assets/expertise/affiliate-desktop.jpg",
    mobileImage: "/assets/expertise/affiliate-mobile.jpg"
  },
  {
    title: "CUSTOMER SERVICE",
    subtitle: "Exceptional support systems that retain and delight customers.",
    image: "/assets/expertise/service-desktop.jpg",
    mobileImage: "/assets/expertise/service-mobile.jpg"
  },
];
