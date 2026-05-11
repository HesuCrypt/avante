import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Campaigns Managed", value: 500, suffix: "+" },
  { label: "Live Stream Hours", value: 1200, suffix: "+" },
  { label: "Partner Brands", value: 50, suffix: "+" },
  { label: "ROI Increase", value: 150, suffix: "%" },
];

const features = [
  {
    title: "Data-Driven Strategies",
    description: "We don't guess. We analyze market trends and consumer behavior to build strategies that work.",
  },
  {
    title: "High Engagement Systems",
    description: "Our proprietary livestream frameworks ensure maximum viewer retention and interaction.",
  },
  {
    title: "Marketplace Integration",
    description: "Seamless synchronization with major e-commerce platforms for unified inventory and sales tracking.",
  },
  {
    title: "Expert Production Team",
    description: "A dedicated team of producers, directors, and creatives with years of broadcast experience.",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="why-us" className="py-24 bg-avante-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Results That Speak For Themselves
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-blue-500/30 pl-6 hover:border-blue-500 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div ref={ref} className="grid grid-cols-2 gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 relative z-10 shadow-xl"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                    {inView ? (
                      <CountUp end={stat.value} duration={5} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
