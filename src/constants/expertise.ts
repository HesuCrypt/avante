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

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  avatar?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Deliverable = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
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
  process: ProcessStep[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  deliverables: Deliverable[];
  guarantee: string;
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
    process: [
      { step: 1, title: "Store Audit", description: "Comprehensive analysis of your current store performance and opportunities." },
      { step: 2, title: "Optimization", description: "Enhance product listings, images, pricing, and store layout for maximum conversions." },
      { step: 3, title: "Campaign Execution", description: "Launch targeted promotions and campaign strategies to drive sales." },
      { step: 4, title: "Ongoing Management", description: "Continuous monitoring, optimization, and reporting to sustain growth." }
    ],
    testimonials: [
      { quote: "Our sales increased by 280% in just 3 months of working with their team. The results speak for themselves.", author: "Maria Santos", company: "Fashion Haven" },
      { quote: "They completely transformed our Shopee store. The attention to detail on product listings is unmatched.", author: "James Chen", company: "Tech Gadgets PH" }
    ],
    faqs: [
      { question: "Which marketplaces do you support?", answer: "We support all major platforms including Shopee, Lazada, TikTok Shop, and Shopify." },
      { question: "How quickly can I expect results?", answer: "Most clients see improvements within 4-6 weeks, with significant growth after 3 months." },
      { question: "Do you provide inventory management?", answer: "Yes! We offer full inventory coordination and fulfillment support." }
    ],
    deliverables: [
      { title: "Store Setup & Design", description: "Complete marketplace store creation with branded aesthetics" },
      { title: "Product Catalog Optimization", description: "SEO-optimized listings with professional images and copy" },
      { title: "Monthly Performance Reports", description: "Detailed analytics and growth insights" },
      { title: "Campaign Strategy", description: "Planned promotions and marketing calendar" }
    ],
    guarantee: "We guarantee a minimum 20% increase in conversion rate within the first 90 days, or we'll work for free until you see results.",
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
    process: [
      { step: 1, title: "Discovery & Strategy", description: "Deep dive into your business goals and target audience." },
      { step: 2, title: "Campaign Setup", description: "Configure tracking, create creatives, and launch initial campaigns." },
      { step: 3, title: "Optimization", description: "Continuous testing and refinement based on real-time data." },
      { step: 4, title: "Scale", description: "Expand successful campaigns across channels for maximum ROI." }
    ],
    testimonials: [
      { quote: "Their data-driven approach cut our ad spend by 35% while doubling our conversions. Absolutely incredible results.", author: "David Lim", company: "Growth Co." },
      { quote: "Finally, an agency that understands how to actually make ads profitable. Worth every peso.", author: "Sarah Kim", company: "Beauty Brand Inc" }
    ],
    faqs: [
      { question: "Which advertising platforms do you use?", answer: "We work with Meta (Facebook/Instagram), Google Ads, TikTok Ads, and YouTube." },
      { question: "What's your minimum ad spend requirement?", answer: "We work with budgets starting at ₱50,000 per month, tailored to your goals." },
      { question: "Do you handle creative production?", answer: "Yes! We provide full creative services including ad copy and design." }
    ],
    deliverables: [
      { title: "Complete Campaign Management", description: "End-to-end setup, optimization, and monitoring" },
      { title: "Weekly Performance Reports", description: "Transparent analytics and insights" },
      { title: "Creative Assets", description: "Ad copy, images, and video concepts" },
      { title: "Audience Strategy", description: "Targeting, retargeting, and lookalike audiences" }
    ],
    guarantee: "If we don't deliver a positive ROAS within your first 60 days, we'll refund our management fee.",
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
    process: [
      { step: 1, title: "Brand Immersion", description: "We learn your voice, values, and audience inside and out." },
      { step: 2, title: "Content Strategy", description: "Create a tailored content plan aligned with your goals." },
      { step: 3, title: "Creation & Publishing", description: "High-quality content production and scheduled posting." },
      { step: 4, title: "Community Building", description: "Engage with your audience and grow your community." }
    ],
    testimonials: [
      { quote: "Our Instagram engagement grew by 400% in 6 months. The content they create is exactly what our audience loves.", author: "Jessica Wong", company: "Lifestyle Brand Co" },
      { quote: "They don't just post - they build real communities. Our customer loyalty has never been stronger.", author: "Michael Cruz", company: "Local Café Chain" }
    ],
    faqs: [
      { question: "Which platforms do you manage?", answer: "Instagram, Facebook, TikTok, LinkedIn, and Twitter/X - whatever makes sense for your brand." },
      { question: "How often do you post?", answer: "We customize posting frequency based on your audience and goals, typically 3-7 times per week." },
      { question: "Do you handle influencer collaborations?", answer: "Absolutely! We source, negotiate, and manage influencer partnerships for you." }
    ],
    deliverables: [
      { title: "Monthly Content Calendar", description: "Planned content with themes and captions" },
      { title: "High-Quality Visuals", description: "Professional graphics and video content" },
      { title: "Community Management", description: "Daily engagement and response to messages" },
      { title: "Growth Analytics", description: "Monthly reports on engagement and growth metrics" }
    ],
    guarantee: "We guarantee a 50% increase in engagement within the first 3 months, or we'll add extra content for free.",
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
    process: [
      { step: 1, title: "Planning", description: "Define stream goals, products to feature, and promotional strategy." },
      { step: 2, title: "Preparation", description: "Rehearse, set up equipment, and prepare engaging content." },
      { step: 3, title: "Go Live", description: "Professional broadcast with interactive elements and sales pushes." },
      { step: 4, title: "Follow-up", description: "Analyze performance and nurture leads from the stream." }
    ],
    testimonials: [
      { quote: "Our first livestream with them generated ₱2.3M in sales in just 4 hours. Absolutely mind-blowing.", author: "Angela Reyes", company: "Home & Living Brand" },
      { quote: "The production quality is incredible. We look like a national TV show, and our sales reflect it.", author: "Robert Tan", company: "Beauty Empire" }
    ],
    faqs: [
      { question: "Do you provide the studio and equipment?", answer: "Yes! We have a professional studio with full production capabilities, or we can stream on location." },
      { question: "Can you provide hosts?", answer: "Absolutely! We have professional, trained hosts experienced in live selling." },
      { question: "How often should we do livestreams?", answer: "We recommend 1-4 times per month based on your goals and capacity." }
    ],
    deliverables: [
      { title: "Full Production Service", description: "Studio, equipment, and technical team" },
      { title: "Professional Host", description: "Experienced live selling presenter" },
      { title: "Stream Planning", description: "Content flow, game mechanics, and promotion strategy" },
      { title: "Performance Report", description: "Detailed analytics on viewers, engagement, and sales" }
    ],
    guarantee: "We guarantee a minimum viewership target or we'll host your next stream at 50% off.",
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
    process: [
      { step: 1, title: "Program Design", description: "Create commission structure and program guidelines." },
      { step: 2, title: "Recruitment", description: "Identify and onboard high-quality affiliates and creators." },
      { step: 3, title: "Activation", description: "Equip affiliates with assets and launch campaigns." },
      { step: 4, title: "Management", description: "Ongoing support, motivation, and performance optimization." }
    ],
    testimonials: [
      { quote: "They built our affiliate program from scratch, and now it drives 40% of our monthly revenue.", author: "Kevin Rodriguez", company: "Fitness Brand PH" },
      { quote: "Their network of creators is incredible. We've worked with influencers we never could have accessed on our own.", author: "Nicole Bautista", company: "Fashion Forward" }
    ],
    faqs: [
      { question: "How do you find affiliates?", answer: "We use a mix of outreach to existing creators, applications, and our extensive network." },
      { question: "What commission structure do you recommend?", answer: "We customize based on your margins, but typically 10-25% depending on your industry." },
      { question: "Do you handle payments to affiliates?", answer: "Yes! We manage tracking, reporting, and the entire payout process." }
    ],
    deliverables: [
      { title: "Affiliate Program Setup", description: "Complete structure and guidelines" },
      { title: "Creator Network", description: "Access to our curated list of influencers" },
      { title: "Performance Tracking", description: "Real-time dashboards and reporting" },
      { title: "Creative Assets", description: "Custom content for affiliates to use" }
    ],
    guarantee: "We guarantee your affiliate program will drive positive ROI within the first 6 months.",
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
    process: [
      { step: 1, title: "Onboarding", description: "Learn your products, policies, and brand voice." },
      { step: 2, title: "Setup", description: "Integrate with your platforms and establish workflows." },
      { step: 3, title: "Go Live", description: "Begin providing exceptional customer support." },
      { step: 4, title: "Optimize", description: "Continuous improvement based on feedback and data." }
    ],
    testimonials: [
      { quote: "Our CSAT score jumped from 72 to 96 in just 2 months. Customer complaints are almost non-existent now.", author: "Patricia de Leon", company: "Premium Goods Co" },
      { quote: "They don't just answer questions - they actually help sell. Our average order value from chat is up 35%.", author: "Daniel Sy", company: "Electronics Plus" }
    ],
    faqs: [
      { question: "What hours do you provide support?", answer: "We offer 24/7 support, or custom hours tailored to your needs." },
      { question: "Which channels do you cover?", answer: "Email, chat, Facebook Messenger, Instagram DM, and more." },
      { question: "Can you handle multiple languages?", answer: "Yes! We support English, Filipino, and other languages upon request." }
    ],
    deliverables: [
      { title: "Dedicated Support Team", description: "Trained representatives for your brand" },
      { title: "Multi-Channel Coverage", description: "Support across all your customer touchpoints" },
      { title: "Quality Assurance", description: "Monitoring and continuous improvement" },
      { title: "Detailed Reporting", description: "CSAT, response time, and resolution metrics" }
    ],
    guarantee: "We guarantee 90%+ CSAT scores within 3 months, or we'll add extra support hours at no cost.",
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
