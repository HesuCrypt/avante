import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Sparkles, TrendingUp, HelpCircle, Trophy, HelpCircle as FactIcon } from "lucide-react";
import { EXPERTISE_SLIDES, type ExpertiseSlide } from "../constants/expertise";

interface ServiceDetailProps {
  slug: string;
  onBack: () => void;
}

export default function ServiceDetail({ slug, onBack }: ServiceDetailProps) {
  const service = EXPERTISE_SLIDES.find((s) => s.slug === slug);

  // Scroll to top when this service is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Simulator State
  const [sliderValue, setSliderValue] = useState(5000); // represents budget or starting value
  const [speedMultiplier, setSpeedMultiplier] = useState(1.5); // 1.5x, 2.5x, 4x
  const [speedLabel, setSpeedLabel] = useState("Rocket Mode 🚀");

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-slate-50 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Service not found</h3>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-avante-blue text-white rounded-full font-bold shadow-md hover:bg-avante-dark transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Go back
        </button>
      </div>
    );
  }

  const { title, description, features, playfulDetails } = service;

  // Simulator logic dependent on the service
  const getSimulatorLabels = () => {
    switch (slug) {
      case "ecommerce-account-management":
        return {
          sliderLabel: "Current Monthly Orders",
          sliderUnit: "orders",
          min: 100,
          max: 20000,
          step: 100,
          resultLabel: "Simulated Monthly Revenue Potential",
          resultCalc: (val: number, mult: number) => {
            const avgOrderValue = 1200; // PHP or USD reference
            return (val * mult * avgOrderValue).toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
              maximumFractionDigits: 0,
            });
          },
          statLabel: "Time Saved / Month",
          statVal: (val: number) => `${Math.round(val * 0.05 + 20)} Hours ⏰`,
        };
      case "performance-marketing":
        return {
          sliderLabel: "Ad Spend Budget / Month",
          sliderUnit: "PHP",
          min: 10000,
          max: 500000,
          step: 5000,
          resultLabel: "Estimated Purchase Conversions",
          resultCalc: (val: number, mult: number) => {
            const costPerAcquisition = 350;
            return Math.round((val / costPerAcquisition) * mult).toLocaleString() + " Orders 🛒";
          },
          statLabel: "Target ROAS (Ad Return)",
          statVal: (val: number, mult: number) => `${(mult * 2.8).toFixed(1)}x ROAS 📈`,
        };
      case "social-media-management":
        return {
          sliderLabel: "Current Follower Count",
          sliderUnit: "followers",
          min: 500,
          max: 100000,
          step: 500,
          resultLabel: "Monthly Interactive Reach Boost",
          resultCalc: (val: number, mult: number) => {
            return Math.round(val * mult * 4.2).toLocaleString() + " Accounts 📢";
          },
          statLabel: "Weekly Brand Buzz Factor",
          statVal: (val: number, mult: number) => {
            if (mult < 2) return "Highly Engaged 👍";
            if (mult < 3) return "Vibe Central 🔥";
            return "Viral Status 🌟";
          },
        };
      case "livestream":
        return {
          sliderLabel: "Target Livestream Sessions / Month",
          sliderUnit: "streams",
          min: 2,
          max: 30,
          step: 1,
          resultLabel: "Estimated Live Viewers & Buyers",
          resultCalc: (val: number, mult: number) => {
            return Math.round(val * 1500 * mult).toLocaleString() + " Viewers 👀";
          },
          statLabel: "Flash Voucher Claim Rate",
          statVal: (val: number, mult: number) => `${Math.round(val * 1.8 + 45)}% Claimed ⚡`,
        };
      case "affiliate-management":
        return {
          sliderLabel: "Active Creators / Affiliate Army",
          sliderUnit: "influencers",
          min: 10,
          max: 500,
          step: 10,
          resultLabel: "Estimated Organic Video Impressions",
          resultCalc: (val: number, mult: number) => {
            return Math.round(val * 8500 * mult).toLocaleString() + " Views 📱";
          },
          statLabel: "Estimated Sales Share",
          statVal: (val: number, mult: number) => `${(mult * 8 + 12).toFixed(0)}% of Total Revenue 💸`,
        };
      case "customer-service":
      default:
        return {
          sliderLabel: "Average Incoming Chats / Day",
          sliderUnit: "chats",
          min: 50,
          max: 2000,
          step: 50,
          resultLabel: "Estimated CSAT (Customer Satisfaction) Score",
          resultCalc: (val: number, mult: number) => {
            const base = 82;
            const boost = mult * 4.5;
            return Math.min(99.8, base + boost).toFixed(1) + "% Excellent 😊";
          },
          statLabel: "Average Resolution Speed",
          statVal: (val: number, mult: number) => {
            const speed = Math.max(1, 15 - mult * 2.5);
            return `< ${speed.toFixed(0)} Minutes ⚡`;
          },
        };
    }
  };

  const sim = getSimulatorLabels();

  // Set default slider value based on range min/max
  useEffect(() => {
    setSliderValue(Math.round((sim.max + sim.min) / 3));
  }, [slug]);

  const handleSpeedChange = (mult: number, label: string) => {
    setSpeedMultiplier(mult);
    setSpeedLabel(label);
  };

  return (
    <div className="bg-slate-50 py-16 relative overflow-hidden min-h-screen">
      {/* Playful Floating Circles for Aesthetic Vibe */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button with hover arrow translation */}
        <div className="mb-10">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-avante-blue hover:text-avante-dark transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
            Back to services
          </button>
        </div>

        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Descriptive text, features, badge */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Playful Pill Badge */}
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r ${playfulDetails.gradient} shadow-sm mb-4`}>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                {playfulDetails.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6">
                {title} <span className="inline-block animate-bounce">{playfulDetails.emoji}</span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-5"
            >
              <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
                <Trophy className={`w-5 h-5 ${playfulDetails.iconColor}`} />
                What We Do Best
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${playfulDetails.iconColor} mt-0.5`} />
                    <span className="text-slate-700 text-sm font-semibold leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Playful Fun Fact Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`p-6 rounded-3xl border ${playfulDetails.accentBg} flex gap-4 items-start`}
            >
              <div className={`p-2.5 rounded-2xl bg-white shadow-sm shrink-0 ${playfulDetails.iconColor}`}>
                <FactIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-xs font-black uppercase tracking-wider mb-1 ${playfulDetails.textMuted}`}>
                  Fun Vibe Fact!
                </h4>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {playfulDetails.funFact}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Playful Interactive Success Simulator Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative overflow-hidden group"
            >
              {/* Corner Accent Background Gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${playfulDetails.gradient} opacity-5 blur-2xl rounded-full`} />

              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                    Success Simulator 🔮
                  </h3>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Interactive</span>
                </div>

                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  Adjust the parameters below to calculate the potential impact of integrating our service into your digital operations.
                </p>

                {/* Input Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                    <span>{sim.sliderLabel}</span>
                    <span className={`text-base font-black ${playfulDetails.textMuted}`}>
                      {sliderValue.toLocaleString()} <span className="text-xs text-slate-400">{sim.sliderUnit}</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={sim.min}
                    max={sim.max}
                    step={sim.step}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-avante-blue"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>{sim.min.toLocaleString()}</span>
                    <span>{sim.max.toLocaleString()}</span>
                  </div>
                </div>

                {/* Growth Vibe Speed buttons */}
                <div className="space-y-3">
                  <span className="text-sm font-bold text-slate-700 block">Choose Your Vibe Speed:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { mult: 1.2, label: "Steady Vibe 🌱" },
                      { mult: 1.8, label: "Rocket Mode 🚀" },
                      { mult: 2.8, label: "Moonshot 🌕" }
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleSpeedChange(item.mult, item.label)}
                        className={`py-2 px-1 text-xs font-bold rounded-2xl border text-center transition-all duration-300 cursor-pointer ${speedLabel === item.label
                            ? `border-transparent text-white bg-gradient-to-r ${playfulDetails.gradient} shadow-md`
                            : "border-slate-200 text-slate-600 bg-white hover:border-slate-300 hover:bg-slate-50"
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-6 space-y-5">
                  {/* Results Dashboard */}
                  <div className={`p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center`}>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {sim.resultLabel}
                    </span>
                    <span className={`text-2xl sm:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${playfulDetails.gradient}`}>
                      {sim.resultCalc(sliderValue, speedMultiplier)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center px-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">{sim.statLabel}</span>
                    <span className="text-sm font-black text-slate-700">{sim.statVal(sliderValue, speedMultiplier)}</span>
                  </div>
                </div>

                {/* Let's Talk CTA */}
                <a
                  href="#contact"
                  className="w-full text-center block group/btn relative overflow-hidden rounded-2xl bg-avante-blue hover:bg-avante-dark text-white py-4 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Make it Happen ✨
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
