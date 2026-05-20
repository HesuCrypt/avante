/**
 * EXPERTISE SECTION IMAGES & CONTENT
 */

export type PlayfulDetails = {
  badge: string;
  funFact: string;
  emoji: string;
  gradient: string;
  accentBg: string;
  textMuted: string;
  iconColor: string;
};

export type ExpertiseSlide = {
  title: string;
  subtitle: string;
  image: string;
  mobileImage?: string;
  slug: string;
  description: string;
  features: string[];
  playfulDetails: PlayfulDetails;
};

export const EXPERTISE_SLIDES: ExpertiseSlide[] = [
  {
    title: "ECOMMERCE ACCOUNT MANAGEMENT",
    subtitle: "End-to-end management of your online store for maximum growth.",
    image: "/assets/expertise/ecommerce-desktop.jpg",
    mobileImage: "/assets/expertise/ecommerce-mobile.jpg",
    slug: "ecommerce-account-management",
    description: "Supercharge your online store! We take care of everything from inventory syncing to product listing optimization, shop design, customer order flows, and conversion optimization across major marketplaces and platforms.",
    features: [
      "Marketplace Store Setup (Shopee, Lazada, TikTok Shop)",
      "SEO SKU & Catalog Optimization",
      "Dynamic Promotion & Mega-Campaign Planning",
      "Pricing Strategy & Competitor Analysis",
      "Inventory Management & Fulfillment Coordination"
    ],
    playfulDetails: {
      badge: "Shop Supercharger",
      funFact: "Stores with fully optimized SKU catalogs see up to 3x higher conversion rates in their first month!",
      emoji: "🛍️",
      gradient: "from-amber-400 to-orange-500",
      accentBg: "bg-amber-500/10 border-amber-500/20",
      textMuted: "text-amber-600",
      iconColor: "text-amber-500"
    }
  },
  {
    title: "PERFORMANCE MARKETING",
    subtitle: "Data-driven campaigns that convert and scale your revenue.",
    image: "/assets/expertise/marketing-desktop.jpg",
    mobileImage: "/assets/expertise/marketing-mobile.jpg",
    slug: "performance-marketing",
    description: "Scale your sales with surgical precision. We build high-converting, multi-channel advertising campaigns (Meta, Google, TikTok) backed by absolute data transparency and continuous creative A/B testing.",
    features: [
      "Paid Search & Social Media Ads",
      "Lookalike & Custom Audience Retargeting",
      "Conversion Rate Optimization (CRO)",
      "Real-time Client Performance Dashboards",
      "Pixel & Conversion API Integration"
    ],
    playfulDetails: {
      badge: "ROI Accelerator",
      funFact: "Our custom negative-audience modeling filters out cold traffic, reducing wasteful ad-spend by up to 40%!",
      emoji: "📈",
      gradient: "from-emerald-400 to-teal-500",
      accentBg: "bg-emerald-500/10 border-emerald-500/20",
      textMuted: "text-emerald-600",
      iconColor: "text-emerald-500"
    }
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "Strategic content and community management across all platforms.",
    image: "/assets/expertise/social-desktop.jpg",
    mobileImage: "/assets/expertise/social-mobile.jpg",
    slug: "social-media-management",
    description: "Turn casual scrollers into loyal brand advocates. We handle creative content calendar creation, high-aesthetic graphic design, engaging copywriting, short-form video concepts, and active community interaction.",
    features: [
      "High-Aesthetic Content Creation",
      "Weekly Content Calendars & Copywriting",
      "Active Direct Message & Comment Engagement",
      "Influencer Outreach & Sourcing",
      "Platform Growth Analytics & Strategy"
    ],
    playfulDetails: {
      badge: "Buzz Creator",
      funFact: "Visual-first social posts receive over 150% more shares and comments than standard text updates.",
      emoji: "🎨",
      gradient: "from-purple-400 to-pink-500",
      accentBg: "bg-purple-500/10 border-purple-500/20",
      textMuted: "text-purple-600",
      iconColor: "text-purple-500"
    }
  },
  {
    title: "LIVESTREAM",
    subtitle: "High-impact live selling and streaming production.",
    image: "/assets/expertise/livestream-desktop.jpg",
    mobileImage: "/assets/expertise/livestream-mobile.jpg",
    slug: "livestream",
    description: "Go live, sell out. We host, produce, and optimize high-energy livestream selling sessions with professional studio setups, audio/video equipment, engaging scripts, and charismatic hosts.",
    features: [
      "Professional Live Broadcast Studio Setup",
      "Charismatic & Trained Livestream Hosts",
      "Interactive Game & Voucher Mechanics",
      "Real-time Cohort Sales Funnel Tracking",
      "Post-Stream Data Insights & Analysis"
    ],
    playfulDetails: {
      badge: "Showstopper",
      funFact: "Livestreams convert up to 10x higher than traditional e-commerce product pages due to real-time interactive urgency!",
      emoji: "🎥",
      gradient: "from-rose-400 to-red-500",
      accentBg: "bg-rose-500/10 border-rose-500/20",
      textMuted: "text-rose-600",
      iconColor: "text-rose-500"
    }
  },
  {
    title: "AFFILIATE MANAGEMENT",
    subtitle: "Build and manage affiliate networks that drive consistent sales.",
    image: "/assets/expertise/affiliate-desktop.jpg",
    mobileImage: "/assets/expertise/affiliate-mobile.jpg",
    slug: "affiliate-management",
    description: "Build a digital army of passionate promoters. We identify, recruit, and manage top affiliates and creators who drive authentic recommendations and cost-effective sales for your brand.",
    features: [
      "Affiliate Program Structure & Commission Strategy",
      "KOL / Creator Sourcing & Outreach",
      "Performance Tracking & Payout Management",
      "Creative Content Briefing & Asset Creation",
      "Affiliate Community Building & Contests"
    ],
    playfulDetails: {
      badge: "Network Builder",
      funFact: "Affiliate networks can contribute up to 30% of total e-commerce revenue when managed with structured creator relationships.",
      emoji: "🤝",
      gradient: "from-cyan-400 to-blue-500",
      accentBg: "bg-cyan-500/10 border-cyan-500/20",
      textMuted: "text-cyan-600",
      iconColor: "text-cyan-500"
    }
  },
  {
    title: "CUSTOMER SERVICE",
    subtitle: "Exceptional support systems that retain and delight customers.",
    image: "/assets/expertise/service-desktop.jpg",
    mobileImage: "/assets/expertise/service-mobile.jpg",
    slug: "customer-service",
    description: "Turn support tickets into sales opportunities. Our highly-trained customer success team responds instantly, solves queries with empathy, and drives upsell/cross-sell opportunities during live chat.",
    features: [
      "24/7 Chat & Ticket Support Operations",
      "Empathic Multi-Channel Escalation Pathways",
      "In-Chat Upselling & Cross-selling Tactics",
      "Review & Feedback Moderation",
      "CSAT & SLA Performance Dashboards"
    ],
    playfulDetails: {
      badge: "Happiness Champion",
      funFact: "93% of customers are likely to make repeat purchases with companies that offer prompt and helpful customer service.",
      emoji: "💖",
      gradient: "from-violet-400 to-indigo-500",
      accentBg: "bg-violet-500/10 border-violet-500/20",
      textMuted: "text-violet-600",
      iconColor: "text-violet-500"
    }
  },
];
