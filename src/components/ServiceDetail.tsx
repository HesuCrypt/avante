import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield,
  Package,
  MessageCircle,
  Clock
} from "lucide-react";
import { EXPERTISE_SLIDES, type ExpertiseSlide } from "../constants/expertise";

interface ServiceDetailProps {
  slug: string;
  onBack: () => void;
}

export default function ServiceDetail({ slug, onBack }: ServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const service = EXPERTISE_SLIDES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-white text-center">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Service not found</h3>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>
      </div>
    );
  }

  const { 
    title, 
    description, 
    features, 
    playfulDetails, 
    image,
    process,
    testimonials,
    faqs,
    deliverables,
    guarantee
  } = service;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide uppercase">Back to Services</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r ${playfulDetails.gradient} mb-6`}>
            <Sparkles className="w-3.5 h-3.5" />
            {playfulDetails.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            {description}
          </p>
        </motion.div>

        {/* Two Column Layout - Image + Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Key Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-slate-400" />
                Key Benefits
              </h2>
              <div className="space-y-5">
                {features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 mt-0.5 bg-avante-blue/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-avante-blue" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">
                    Did You Know?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {playfulDetails.funFact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process / How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">How It Works</h2>
          <p className="text-slate-500 mb-10">Our proven process to deliver exceptional results</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className={`p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${playfulDetails.gradient} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* What You'll Get (Deliverables) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-16 lg:mb-20 bg-slate-50 rounded-2xl p-8 lg:p-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What You'll Get</h2>
          <p className="text-slate-500 mb-8">Everything included in our service</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((deliverable, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100">
                <Package className={`w-6 h-6 mt-0.5 ${playfulDetails.iconColor}`} />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{deliverable.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{deliverable.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Core Capabilities</h2>
          <p className="text-slate-500 mb-8">Everything you need to drive real results</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-avante-blue/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${playfulDetails.gradient} flex items-center justify-center`}>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Feature {idx + 1}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">What Our Clients Say</h2>
          <p className="text-slate-500 mb-10 text-center">Real results from real clients</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <MessageCircle className={`w-8 h-8 ${playfulDetails.iconColor} mb-4 opacity-50`} />
                <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${playfulDetails.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 mb-10 text-center">Got questions? We've got answers</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-16 lg:mb-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-amber-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Promise to You</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{guarantee}</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-avante-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-avante-blue" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Data-Driven</h3>
              <p className="text-slate-600 text-sm">Every decision backed by analytics and performance metrics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-avante-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-avante-blue" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600 text-sm">Specialists with proven track records in your industry</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-avante-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-avante-blue" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast Execution</h3>
              <p className="text-slate-600 text-sm">Quick implementation without compromising quality</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 lg:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {title.toLowerCase()} can help you achieve your goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:shadow-lg"
          >
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
