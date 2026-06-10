import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, ChevronRight, X, CheckCircle2, Briefcase, Send } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS: Job[] = [
  {
    id: "ecom-specialist",
    title: "Senior E-Commerce Account Specialist",
    department: "E-Commerce",
    location: "Makati (Hybrid)",
    type: "Full-Time",
    salary: "₱45,000 – ₱65,000 / month",
    summary: "Lead the strategic growth and daily store operations for major e-commerce brands on Shopee, Lazada, and TikTok Shop.",
    responsibilities: [
      "Oversee end-to-end seller center management across Shopee, Lazada, TikTok Shop, and Shopify.",
      "Develop and execute promotion campaigns, flash sales, and mega-campaign strategies.",
      "Analyze store metrics, conversion rates, and traffic sources to optimize funnels.",
      "Work closely with designers and copywriters to ensure listings are optimized for SEO.",
    ],
    requirements: [
      "3+ years managing e-commerce stores in the Southeast Asian market.",
      "Proficient in Microsoft Excel / Google Sheets for sales forecasting.",
      "Excellent communication skills with brand partners or clients.",
      "Degree in Marketing, Business Administration, or related field.",
    ],
  },
  {
    id: "marketing-strategist",
    title: "Performance Marketing Strategist",
    department: "Marketing",
    location: "Makati (Hybrid)",
    type: "Full-Time",
    salary: "₱50,000 – ₱75,000 / month",
    summary: "Plan, build, and optimize high-budget advertising campaigns across Meta, Google, and TikTok platforms.",
    responsibilities: [
      "Design, launch, and monitor paid media campaigns on Meta, Google, and TikTok Ads.",
      "Run continuous A/B testing on ad copies, creatives, and landing pages.",
      "Establish tracking systems using Facebook Pixel, CAPI, and Google Tag Manager.",
      "Present weekly performance dashboards and reports to clients.",
    ],
    requirements: [
      "2+ years managing paid media campaigns with proven ROAS results.",
      "Google Ads and Meta Blueprint Certifications preferred.",
      "Strong strategic thinking and troubleshooting abilities.",
      "Detail-oriented mindset with copywriting skills.",
    ],
  },
  {
    id: "livestream-host",
    title: "Lead Creative Host & Video Producer",
    department: "Creative",
    location: "On-site / Studio",
    type: "Full-Time",
    salary: "₱35,000 – ₱55,000 / month",
    summary: "Serve as the face of our partner brands during high-energy livestream sales events on Shopee and TikTok.",
    responsibilities: [
      "Host daily 2-hour interactive livestreams to showcase products and drive conversions.",
      "Draft engaging livestream scripts, flows, and voucher giveaway mechanisms.",
      "Produce and edit short-form videos optimized for organic reach.",
      "Coordinate studio lighting, audio, and streaming software configurations.",
    ],
    requirements: [
      "1+ years in livestream hosting, public speaking, or content creation.",
      "High charisma and comfort speaking on camera for extended periods.",
      "Basic video editing skills using CapCut or Adobe Premiere.",
      "Excellent Taglish and English verbal communication.",
    ],
  },
  {
    id: "art-director",
    title: "Social Media Art Director",
    department: "Creative",
    location: "Makati (Hybrid)",
    type: "Full-Time",
    salary: "₱45,000 – ₱65,000 / month",
    summary: "Establish the visual identity and aesthetic narrative for our client brands across social media platforms.",
    responsibilities: [
      "Develop creative direction, brand guidelines, and visual frameworks.",
      "Oversee design of static posts, stories, newsletters, and carousel layouts.",
      "Lead brainstorming sessions for seasonal launches and branding initiatives.",
      "Review and approve visual assets, ensuring quality control.",
    ],
    requirements: [
      "4+ years of design experience with at least 1 year in a lead role.",
      "Exceptional portfolio demonstrating mastery in layout and branding.",
      "Proficient in Adobe Creative Suite and Figma.",
      "Motion graphics experience is a significant advantage.",
    ],
  },
  {
    id: "success-specialist",
    title: "Customer Success Specialist",
    department: "Operations",
    location: "Remote",
    type: "Full-Time",
    salary: "₱25,000 – ₱35,000 / month",
    summary: "Provide exceptional live chat support to e-commerce customers, resolving inquiries swiftly.",
    responsibilities: [
      "Manage live chats and complaints across Shopee, Lazada, and brand websites.",
      "Maintain response time SLA under 2 minutes during shift hours.",
      "Acquire deep knowledge of brand catalogs for accurate product inquiries.",
      "Moderate and respond to store product reviews.",
    ],
    requirements: [
      "1+ years in customer service, BPO, or e-commerce support.",
      "Fast typing speed (55+ WPM) with high grammar accuracy.",
      "Reliable remote setup with high-speed internet and backup power.",
      "Willingness to work rotating shifts including weekends.",
    ],
  },
];

const PERKS = [
  { title: "Day 1 HMO Coverage", desc: "Comprehensive health benefits including medical and dental from your first day." },
  { title: "Hybrid Work Setup", desc: "A structured blend of remote capability and creative studio collaboration." },
  { title: "Competitive Bonuses", desc: "Performance commission tiers and incentives aligned with brand growth." },
  { title: "Learning Allowances", desc: "Annual stipend for online courses, industry events, and skill expansion." },
  { title: "Vibrant Makati Studio", desc: "Collaborative, pet-friendly workspace with premium audio/visual gear." },
  { title: "Mental Wellness Days", desc: "Additional paid wellness leaves to recharge and maintain work-life balance." },
];

export default function Career() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const departments = ["All", ...Array.from(new Set(JOBS.map((j) => j.department)))];
  const filtered = JOBS.filter((j) => selectedDept === "All" || j.department === selectedDept);

  return (
    <section className="bg-white min-h-screen">
      {/* Hero Header — matches About page pattern */}
      <div className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-sm font-bold text-avante-blue uppercase tracking-widest mb-2">Careers</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Build the Future of <br />
              <span className="text-avante-blue">Digital Commerce</span>
            </h1>
            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
              We're looking for innovative thinkers, data lovers, and creative storytellers
              to join our team. Grow your career in a dynamic, high-impact environment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Department Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedDept === dept
                  ? "bg-avante-dark text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
          {filtered.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActiveJob(job)}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-avante-blue/25 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 opacity-0 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-avante-light text-avante-blue px-2.5 py-1 rounded-md">
                    {job.department}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-semibold">
                    <Clock className="w-3 h-3" /> {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-avante-blue transition-colors mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  <span>·</span>
                  <span>{job.salary}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">{job.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-avante-blue text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl bg-slate-50 mb-20">
            <p className="text-slate-500 font-medium mb-3">No positions match your filter.</p>
            <button onClick={() => setSelectedDept("All")} className="text-sm font-bold text-avante-blue hover:underline cursor-pointer">
              Clear Filters
            </button>
          </div>
        )}

        {/* Perks Section — matches WhyChooseUs dark style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-avante-dark rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Why Avante</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Perks & Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PERKS.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-l-2 border-blue-500/30 pl-5 hover:border-blue-500 transition-colors"
                >
                  <h4 className="text-white font-bold mb-1">{perk.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveJob(null)}
              className="absolute inset-0 bg-avante-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
            >
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-all cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-8 space-y-6">
                {/* Header */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-avante-light text-avante-blue px-2.5 py-1 rounded-md">
                    {activeJob.department}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-3 leading-tight">{activeJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 mt-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {activeJob.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeJob.type}</span>
                    <span>·</span>
                    <span>{activeJob.salary}</span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Role Summary</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{activeJob.summary}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2.5">
                    {activeJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-avante-blue shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Requirements</h4>
                  <ul className="space-y-2.5">
                    {activeJob.requirements.map((r, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                        <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-200/60">
                  <a
                    href="mailto:careers@avantedigital.com"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-avante-blue hover:bg-avante-dark text-white rounded-xl font-bold text-sm transition-all shadow-md"
                  >
                    Apply for this Role <Send className="w-4 h-4" />
                  </a>
                  <p className="text-center text-[11px] text-slate-400 mt-3">
                    Send your resume to careers@avantedigital.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
